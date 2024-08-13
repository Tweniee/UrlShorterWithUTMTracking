"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncErrorHandler_middleware_1 = require("../middlewares/asyncErrorHandler.middleware");
const urlShortner_controller_1 = require("../controller/urlShortner.controller");
const router = (0, express_1.Router)();
router.post("/shorten", (0, asyncErrorHandler_middleware_1.asyncMiddleware)(urlShortner_controller_1.urlShorterController));
exports.default = router;
