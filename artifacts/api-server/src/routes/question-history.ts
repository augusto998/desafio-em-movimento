import { Router, type IRouter } from "express";
import { pool } from "@workspace/db";
import { authenticatedUser, requireTrustedOrigin } from "./accounts";

const router: IRouter = Router();
const MAX_HISTORY_IDS = 1_000;

router.get("/question-history", async (request, response) => {
  const user = await authenticatedUser(request);
  if (!user) {
    response.status(401).json({ error: "Entre na sua conta para sincronizar o histórico de questões." });
    return;
  }
  const result = await pool.query<{ question_id: string }>(
    "SELECT question_id FROM question_history WHERE user_id = $1",
    [user.id],
  );
  response.json({ questionIds: result.rows.map((row) => row.question_id) });
});

router.post("/question-history", requireTrustedOrigin, async (request, response) => {
  const user = await authenticatedUser(request);
  if (!user) {
    response.status(401).json({ error: "Entre na sua conta para sincronizar o histórico de questões." });
    return;
  }
  const questionIds: unknown = request.body?.questionIds;
  if (!Array.isArray(questionIds) || questionIds.length > MAX_HISTORY_IDS ||
      !questionIds.every((id) => typeof id === "string" && id.length > 0 && id.length <= 120)) {
    response.status(400).json({ error: "Histórico de questões inválido." });
    return;
  }
  const uniqueIds = [...new Set(questionIds as string[])];
  if (uniqueIds.length) {
    await pool.query(
      `INSERT INTO question_history (user_id, question_id, last_seen_at)
      SELECT $1, item.question_id, now() FROM unnest($2::varchar[]) AS item(question_id)
       ON CONFLICT (user_id, question_id)
       DO UPDATE SET last_seen_at = EXCLUDED.last_seen_at`,
      [user.id, uniqueIds],
    );
  }
  response.json({ saved: uniqueIds.length });
});

export default router;
