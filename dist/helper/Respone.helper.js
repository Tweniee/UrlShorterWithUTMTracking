"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const statusCode_constant_1 = require("../constants/statusCode.constant");
// <--------------------------------SuccessResponse is used to send all successful response to client------------------------>
const successResponse = (res, { message, data }) => {
    return res.status(statusCode_constant_1.statusCodes.OK.code).json({
        success: true,
        message,
        body: data,
    });
};
exports.successResponse = successResponse;
// <---------------------------------ErrorResponse is used to send all failure response to client---------------------------->
const errorResponse = (res, { statusCode, message, errors }) => {
    return res.status(statusCode).json({
        success: false,
        message,
        errors,
    });
};
exports.errorResponse = errorResponse;
