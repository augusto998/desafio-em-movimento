import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { and, desc, eq, gt, sql } from "drizzle-orm";
import { Router, type IRouter, type NextFunction, type Request, type Response } from "express";
import { rateLimit } from "express-rate-limit";
import { db } from "@workspace/db";
import { authSessionsTable, leaderboardTable, usersTable } from "@workspace/db/schema";

const router: IRouter = Router();
const scrypt = promisify(scryptCallback);
const sessionCookie = "dem_session";
const sessionDurationMs = 30 * 24 * 60 * 60 * 1000;
const trustedOrigins = (process.env.FRONTEND_ORIGINS ?? "http://localhost:5173,http://localhost:4173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
if (process.env.RENDER_EXTERNAL_HOSTNAME) {
  trustedOrigins.push(`https://${process.env.RENDER_EXTERNAL_HOSTNAME}`);
}
const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: "draft-8", legacyHeaders: false });
const registerLimiter = rateLimit({ windowMs: 60 * 60 * 1000, limit: 5, standardHeaders: "draft-8", legacyHeaders: false });

function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim().toLowerCase();
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}

function cookieOptions() {
  const sameSite = process.env.COOKIE_SAME_SITE === "lax" ? "lax" : "none";
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" || sameSite === "none",
    sameSite,
    path: "/",
    maxAge: sessionDurationMs,
  } as const;
}

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const derived = (await scrypt(password, salt, 64)) as Buffer;
  return `${salt.toString("hex")}:${derived.toString("hex")}`;
}

async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [saltHex, hashHex] = stored.split(":");
  if (!saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = (await scrypt(password, Buffer.from(saltHex, "hex"), expected.length)) as Buffer;
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

async function issueSession(userId: string, response: Response): Promise<void> {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + sessionDurationMs);
  await db.insert(authSessionsTable).values({ tokenHash: hashToken(token), userId, expiresAt });
  response.cookie(sessionCookie, token, cookieOptions());
}

async function authenticatedUser(request: Request) {
  const token = request.cookies?.[sessionCookie];
  if (typeof token !== "string" || token.length > 100) return null;
  const rows = await db.select({
    id: usersTable.id,
    email: usersTable.email,
    displayName: usersTable.displayName,
  }).from(authSessionsTable)
    .innerJoin(usersTable, eq(authSessionsTable.userId, usersTable.id))
    .where(and(eq(authSessionsTable.tokenHash, hashToken(token)), gt(authSessionsTable.expiresAt, new Date())))
    .limit(1);
  return rows[0] ?? null;
}

function validPassword(value: unknown): value is string {
  return typeof value === "string" && value.length >= 10 && value.length <= 128;
}

function requireTrustedOrigin(request: Request, response: Response, next: NextFunction) {
  const origin = request.get("origin");
  if (!origin || !trustedOrigins.includes(origin)) {
    response.status(403).json({ error: "Origem não autorizada para esta operação." });
    return;
  }
  next();
}

router.post("/auth/register", requireTrustedOrigin, registerLimiter, async (request, response) => {
  const email = normalizeEmail(request.body?.email);
  const displayName = typeof request.body?.displayName === "string" ? request.body.displayName.trim() : "";
  const password = request.body?.password;
  if (!email || displayName.length < 2 || displayName.length > 40 || !validPassword(password)) {
    response.status(400).json({ error: "Informe e-mail válido, nome (2–40 caracteres) e senha de 10 a 128 caracteres." });
    return;
  }
  try {
    const passwordHash = await hashPassword(password);
    const [user] = await db.insert(usersTable).values({ email, displayName, passwordHash }).returning({
      id: usersTable.id,
      email: usersTable.email,
      displayName: usersTable.displayName,
    });
    await issueSession(user.id, response);
    response.status(201).json({ user });
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error && error.code === "23505") {
      response.status(409).json({ error: "Já existe uma conta com este e-mail." });
      return;
    }
    throw error;
  }
});

router.post("/auth/login", requireTrustedOrigin, loginLimiter, async (request, response) => {
  const email = normalizeEmail(request.body?.email);
  const password = request.body?.password;
  if (!email || typeof password !== "string" || password.length > 128) {
    response.status(400).json({ error: "E-mail ou senha inválidos." });
    return;
  }
  const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    response.status(401).json({ error: "E-mail ou senha inválidos." });
    return;
  }
  await issueSession(user.id, response);
  response.json({ user: { id: user.id, email: user.email, displayName: user.displayName } });
});

router.get("/auth/me", async (request, response) => {
  const user = await authenticatedUser(request);
  if (!user) {
    response.status(401).json({ error: "Entre na sua conta para continuar." });
    return;
  }
  response.json({ user });
});

router.post("/auth/logout", requireTrustedOrigin, async (request, response) => {
  const token = request.cookies?.[sessionCookie];
  if (typeof token === "string") {
    await db.delete(authSessionsTable).where(eq(authSessionsTable.tokenHash, hashToken(token)));
  }
  response.clearCookie(sessionCookie, cookieOptions());
  response.status(204).end();
});

router.get("/ranking", async (_request, response) => {
  const rows = await db.select({
    id: leaderboardTable.userId,
    name: usersTable.displayName,
    points: leaderboardTable.points,
    correct: leaderboardTable.correct,
    total: leaderboardTable.total,
    maxStreak: leaderboardTable.maxStreak,
    updatedAt: leaderboardTable.updatedAt,
  }).from(leaderboardTable)
    .innerJoin(usersTable, eq(leaderboardTable.userId, usersTable.id))
    .orderBy(desc(leaderboardTable.points), desc(leaderboardTable.updatedAt))
    .limit(10);
  response.json({ ranking: rows });
});

router.post("/scores", requireTrustedOrigin, async (request, response) => {
  const user = await authenticatedUser(request);
  if (!user) {
    response.status(401).json({ error: "Entre na sua conta para salvar o resultado." });
    return;
  }
  const { points, correct, total, maxStreak } = request.body ?? {};
  if (!Number.isInteger(points) || points < 0 || points > 100_000 ||
      !Number.isInteger(correct) || correct < 0 ||
      !Number.isInteger(total) || total < 1 || correct > total ||
      !Number.isInteger(maxStreak) || maxStreak < 0 || maxStreak > correct) {
    response.status(400).json({ error: "Dados da pontuação inválidos." });
    return;
  }
  await db.insert(leaderboardTable).values({ userId: user.id, points, correct, total, maxStreak })
    .onConflictDoUpdate({
      target: leaderboardTable.userId,
      set: {
        points: sql`excluded.points`,
        correct: sql`excluded.correct`,
        total: sql`excluded.total`,
        maxStreak: sql`excluded.max_streak`,
        updatedAt: new Date(),
      },
      setWhere: sql`excluded.points > ${leaderboardTable.points}`,
    });
  const [best] = await db.select().from(leaderboardTable).where(eq(leaderboardTable.userId, user.id)).limit(1);
  response.json({ score: best });
});

router.delete("/scores", requireTrustedOrigin, async (request, response) => {
  const user = await authenticatedUser(request);
  if (!user) {
    response.status(401).json({ error: "Entre na sua conta para excluir seu resultado." });
    return;
  }
  await db.delete(leaderboardTable).where(eq(leaderboardTable.userId, user.id));
  response.status(204).end();
});

export default router;
