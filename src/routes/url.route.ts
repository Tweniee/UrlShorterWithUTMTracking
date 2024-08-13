import { Router } from "express";
import { asyncMiddleware } from "../middlewares/asyncErrorHandler.middleware";
import { urlShorterController } from "../controller/urlShortner.controller";

const router = Router();

router.post("/shorten", asyncMiddleware(urlShorterController));

export default router;
