"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlRequestValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const validatorFunction_1 = require("../validatorFunction");
// <------------------------------------------Validation--------------------------------->
const urlRequestValidation = (req, res, next) => {
    try {
        const urlShorterSchema = joi_1.default.object({
            originalUrl: joi_1.default.string().uri().required(),
            utmSource: joi_1.default.string().required(),
            utmMedium: joi_1.default.string().required(),
            utmCampaign: joi_1.default.string().required(),
            validTimes: joi_1.default.number().integer().min(1),
        });
        const isValid = urlShorterSchema.validate(req.body);
        if (isValid.error) {
            return (0, validatorFunction_1.validatorErrorMessage)(isValid, res);
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.urlRequestValidation = urlRequestValidation;
