import Joi from "joi";
import { NextFunction, Request, Response } from "express";
import { validatorErrorMessage } from "../validatorFunction";

// <------------------------------------------Validation--------------------------------->
export const urlRequestValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const urlShorterSchema = Joi.object({
      originalUrl: Joi.string().uri().required(),
      utmSource: Joi.string().required(),
      utmMedium: Joi.string().required(),
      utmCampaign: Joi.string().required(),
      validTimes: Joi.number().integer().min(1),
    });

    const isValid: any = urlShorterSchema.validate(req.body);
    if (isValid.error) {
      return validatorErrorMessage(isValid, res);
    }
    next();
  } catch (error) {
    next(error);
  }
};
