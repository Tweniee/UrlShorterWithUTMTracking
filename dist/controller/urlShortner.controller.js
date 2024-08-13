"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlShorterController = void 0;
const Respone_helper_1 = require("../helper/Respone.helper");
const statusCode_constant_1 = require("../constants/statusCode.constant");
const urlShorterController = (req, res) => {
    const { originalUrl, utmSource, utmMedium, utmCampaign } = req.body;
    const baseUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    console.log(originalUrl, utmSource, utmMedium, utmCampaign);
    (0, Respone_helper_1.successResponse)(res, { message: statusCode_constant_1.statusCodes.OK.message, data: {} });
};
exports.urlShorterController = urlShorterController;
