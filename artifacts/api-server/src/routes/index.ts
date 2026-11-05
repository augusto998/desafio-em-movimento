import { Router, type IRouter } from "express";
import healthRouter from "./health";
import accountsRouter from "./accounts";
import questionHistoryRouter from "./question-history";

const router: IRouter = Router();

router.use(healthRouter);
router.use(accountsRouter);
router.use(questionHistoryRouter);

export default router;
