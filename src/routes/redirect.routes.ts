import { Router } from "express";
import { asyncMiddleware } from "../middlewares/asyncErrorHandler.middleware";
import { redirectHashController } from "../controller/redirectHash.controller";

const router = Router();

router.get("/:hash",asyncMiddleware(redirectHashController))
export default router;
