"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidRouteHandlerMiddleware = void 0;
const Respone_helper_1 = require("../helper/Respone.helper");
const response_contant_1 = require("../constants/response.contant");
const statusCode_constant_1 = require("../constants/statusCode.constant");
// <------------------------------------------Invalid Routes Middleware-------------------------------->
const invalidRouteHandlerMiddleware = (req, res, next) => {
    try {
        return (0, Respone_helper_1.errorResponse)(res, {
            statusCode: statusCode_constant_1.statusCodes.NOT_FOUND.code,
            message: response_contant_1.INVALID_ROUTE,
            errors: {},
        });
    }
    catch (error) {
        next(error);
    }
};
exports.invalidRouteHandlerMiddleware = invalidRouteHandlerMiddleware;
