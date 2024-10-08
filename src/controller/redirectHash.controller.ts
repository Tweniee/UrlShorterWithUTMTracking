import { Request, Response } from "express";
import {
  checkValidHashService,
  updateAndValidateHash,
} from "../service/tracking.service";
import { junkUrl } from "../constants/response.contant";

export const redirectHashController = async (req: Request, res: Response) => {
  const hash = req.params["hash"];
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  updateAndValidateHash(hash, ip);
  const parentData = await checkValidHashService(hash);
  //   return res.redirect('https://www.google.com');
  if (parentData.length == 0) {
    // return errorResponse(res, {
    //   statusCode: statusCodes.NOT_FOUND.code,
    //   message: statusCodes.NOT_FOUND.message,
    //   error: {},
    // });
    return res.redirect(junkUrl)
  }
  return res.redirect(parentData[0].originalUrl);
};
