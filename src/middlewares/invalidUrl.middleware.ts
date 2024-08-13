import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../helper/Respone.helper";
import { INVALID_ROUTE } from "../constants/response.contant";
import { statusCodes } from "../constants/statusCode.constant";

// <------------------------------------------Invalid Routes Middleware-------------------------------->
export const invalidRouteHandlerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return errorResponse(res, {
      statusCode: statusCodes.NOT_FOUND.code,
      message: INVALID_ROUTE,
      errors: {},
    });
  } catch (error) {
    next(error);
  }
};
