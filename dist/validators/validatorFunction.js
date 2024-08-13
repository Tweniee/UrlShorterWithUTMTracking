"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorErrorMessage = void 0;
const Respone_helper_1 = require("../helper/Respone.helper");
const statusCode_constant_1 = require("../constants/statusCode.constant");
const response_contant_1 = require("../constants/response.contant");
// <---------------------------------------------Validator Error Message------------------------------------------>
const validatorErrorMessage = (isValid, res) => {
    return (0, Respone_helper_1.errorResponse)(res, {
        statusCode: statusCode_constant_1.statusCodes.BAD_REQUEST.code,
        message: response_contant_1.INVALID_PARAMETERS,
        errors: isValid.error.details[0].message,
    });
};
exports.validatorErrorMessage = validatorErrorMessage;
