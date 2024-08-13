import { Request, Response } from "express";
import { successResponse } from "../helper/Respone.helper";
import { statusCodes } from "../constants/statusCode.constant";
export const urlShorterController = (req: Request, res: Response) => {
  const { originalUrl, utmSource, utmMedium, utmCampaign } = req.body;
  const baseUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  console.log(originalUrl, utmSource, utmMedium, utmCampaign);
  successResponse(res, { message: statusCodes.OK.message, data: {} });
};
