"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncErrorHandler_middleware_1 = require("../middlewares/asyncErrorHandler.middleware");
const urlShortner_controller_1 = require("../controller/urlShortner.controller");
const url_validator_1 = require("../validators/url/url.validator");
const router = (0, express_1.Router)();
router.post("/shorten", url_validator_1.urlRequestValidation, (0, asyncErrorHandler_middleware_1.asyncMiddleware)(urlShortner_controller_1.urlShorterController));
exports.default = router;
