"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectHashController = void 0;
const tracking_service_1 = require("../service/tracking.service");
const response_contant_1 = require("../constants/response.contant");
const redirectHashController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = req.params["hash"];
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    (0, tracking_service_1.updateAndValidateHash)(hash, ip);
    const parentData = yield (0, tracking_service_1.checkValidHashService)(hash);
    //   return res.redirect('https://www.google.com');
    if (parentData.length == 0) {
        // return errorResponse(res, {
        //   statusCode: statusCodes.NOT_FOUND.code,
        //   message: statusCodes.NOT_FOUND.message,
        //   error: {},
        // });
        return res.redirect(response_contant_1.junkUrl);
    }
    return res.redirect(parentData[0].originalUrl);
});
exports.redirectHashController = redirectHashController;
