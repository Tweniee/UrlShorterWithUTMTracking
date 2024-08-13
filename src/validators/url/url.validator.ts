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
      utmSource: Joi.string().alphanum().required(),
      utmMedium: Joi.string().alphanum().required(),
      utmCampaign: Joi.string().alphanum().required(),
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
