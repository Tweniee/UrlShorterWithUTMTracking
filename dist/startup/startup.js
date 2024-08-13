"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startUp = void 0;
const routes_1 = require("../routes");
const response_middleware_1 = require("../middlewares/response.middleware");
const invalidUrl_middleware_1 = require("../middlewares/invalidUrl.middleware");
const startUp = (app) => {
    app.use(response_middleware_1.requestLoggerMiddleware);
    // Handling the short Url
    app.use("/", routes_1.redirectRoute);
    app.use("/v1", routes_1.urlRoute);
    // Handle invalid route on server
    app.use("*", invalidUrl_middleware_1.invalidRouteHandlerMiddleware);
};
exports.startUp = startUp;
