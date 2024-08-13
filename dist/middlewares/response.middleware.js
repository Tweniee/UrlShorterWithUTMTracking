"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLoggerMiddleware = void 0;
// <-------------------------------------------Request logger middleware---------------------------->
const requestLoggerMiddleware = (req, res, next) => {
    try {
        const hitApi = `${req.method} ${req.url}`;
        console.log(hitApi, "\n|\nv\n|\nv\n|\nv");
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.requestLoggerMiddleware = requestLoggerMiddleware;
