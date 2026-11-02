import express, { type Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "node:path";
import { existsSync } from "node:fs";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();
const trustedProxyHops = Number(process.env.TRUST_PROXY ?? 0);
if (!Number.isInteger(trustedProxyHops) || trustedProxyHops < 0) {
  throw new Error("TRUST_PROXY must be a non-negative integer number of trusted proxy hops.");
}
app.set("trust proxy", trustedProxyHops);

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
const allowedOrigins = (process.env.FRONTEND_ORIGINS ?? "http://localhost:5173,http://localhost:4173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
if (process.env.RENDER_EXTERNAL_HOSTNAME) {
  allowedOrigins.push(`https://${process.env.RENDER_EXTERNAL_HOSTNAME}`);
}

app.use(cors({
  credentials: true,
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) callback(null, origin ?? false);
    else callback(new Error("Origin is not allowed by CORS"));
  },
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const frontendDistCandidates = [
  process.env.FRONTEND_DIST_DIR,
  path.resolve(process.cwd(), "artifacts/desafio-em-movimento/dist/public"),
  path.resolve(process.cwd(), "dist/public"),
  path.resolve(process.cwd(), "artifacts/desafio-em-movimento", "dist", "public"),
  "/opt/render/project/src/artifacts/desafio-em-movimento/dist/public",
  "/workspace/artifacts/desafio-em-movimento/dist/public",
].filter((candidate): candidate is string => Boolean(candidate));

const frontendDist = frontendDistCandidates.find((candidate) => existsSync(path.join(candidate, "index.html"))) ?? frontendDistCandidates[0];

if (frontendDist) {
  app.use(express.static(frontendDist, { index: false }));
  app.get("/", (_request, response, next) => {
    response.sendFile(path.join(frontendDist, "index.html"), (error) => {
      if (error) next(error);
    });
  });
  app.get(/.*/, (_request, response, next) => {
    response.sendFile(path.join(frontendDist, "index.html"), (error) => {
      if (error) next(error);
    });
  });
}

export default app;
