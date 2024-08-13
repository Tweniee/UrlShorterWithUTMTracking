import { Response } from "express";
import { errorResponse } from "../helper/Respone.helper";
import { statusCodes } from "../constants/statusCode.constant";
import { INVALID_PARAMETERS } from "../constants/response.contant";

// <---------------------------------------------Validator Error Message------------------------------------------>
export const validatorErrorMessage = (
  isValid: any,
  res: Response
): Response => {
  return errorResponse(res, {
    statusCode: statusCodes.BAD_REQUEST.code,
    message: INVALID_PARAMETERS,
    errors: isValid.error.details[0].message,
  });
};