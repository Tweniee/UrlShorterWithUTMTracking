import { Response } from "express";
import { statusCodes } from "../constants/statusCode.constant";

// <--------------------------------SuccessResponse is used to send all successful response to client------------------------>
export const successResponse = (res: Response, { message, data }: any) => {
  return res.status(statusCodes.OK.code).json({
    success: true,
    message,
    body: data,
  });
};

// <---------------------------------ErrorResponse is used to send all failure response to client---------------------------->
export const errorResponse = (
  res: Response,
  { statusCode, message, errors }: any
): Response => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};
