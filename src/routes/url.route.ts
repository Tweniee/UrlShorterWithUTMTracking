import { Router } from "express";
import { asyncMiddleware } from "../middlewares/asyncErrorHandler.middleware";
import { urlShorterController } from "../controller/urlShortner.controller";
import { urlRequestValidation } from "../validators/url/url.validator";

const router = Router();

router.post(
  "/shorten",
  urlRequestValidation,
  asyncMiddleware(urlShorterController)
);

export default router;
