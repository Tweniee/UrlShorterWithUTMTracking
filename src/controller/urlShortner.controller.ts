import { Request, Response } from "express";
import { errorResponse, successResponse } from "../helper/Respone.helper";
import { statusCodes } from "../constants/statusCode.constant";
import { isDuplicateRequest, updateInsertUrlShortnerService, urlShortnerService } from "../service/url.service";
import validUrl from "valid-url";

export const urlShorterController = async (req: Request, res: Response) => {
  const { originalUrl, utmSource, utmMedium, utmCampaign, validTimes } =
    req.body;
  //${req.originalUrl}
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const isAvailable = await isDuplicateRequest({
    originalUrl,
    utmSource,
    utmMedium,
    utmCampaign,
  });
  if (isAvailable.length > 0) {
    const updateUrlShortner = await updateInsertUrlShortnerService(
      isAvailable[0]._id,
      { originalUrl, utmSource, utmMedium, utmCampaign, validTimes }
    );
    return successResponse(res, {
      message: statusCodes.OK.message,
      data: updateUrlShortner,
    });
  }
  const shortUrl = await urlShortnerService(baseUrl, {
    originalUrl,
    utmSource,
    utmMedium,
    utmCampaign,
    validTimes,
  });
  return successResponse(res, {
    message: statusCodes.OK.message,
    data: shortUrl,
  });
};
