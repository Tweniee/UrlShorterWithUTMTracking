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
exports.urlShorterController = void 0;
const Respone_helper_1 = require("../helper/Respone.helper");
const statusCode_constant_1 = require("../constants/statusCode.constant");
const url_service_1 = require("../service/url.service");
const urlShorterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { originalUrl, utmSource, utmMedium, utmCampaign, validTimes } = req.body;
    //${req.originalUrl}
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const isAvailable = yield (0, url_service_1.isDuplicateRequest)({
        originalUrl,
        utmSource,
        utmMedium,
        utmCampaign,
    });
    if (isAvailable.length > 0) {
        const updateUrlShortner = yield (0, url_service_1.updateInsertUrlShortnerService)(isAvailable[0]._id, { originalUrl, utmSource, utmMedium, utmCampaign, validTimes });
        return (0, Respone_helper_1.successResponse)(res, {
            message: statusCode_constant_1.statusCodes.OK.message,
            data: updateUrlShortner,
        });
    }
    const shortUrl = yield (0, url_service_1.urlShortnerService)(baseUrl, {
        originalUrl,
        utmSource,
        utmMedium,
        utmCampaign,
        validTimes,
    });
    return (0, Respone_helper_1.successResponse)(res, {
        message: statusCode_constant_1.statusCodes.OK.message,
        data: shortUrl,
    });
});
exports.urlShorterController = urlShorterController;
