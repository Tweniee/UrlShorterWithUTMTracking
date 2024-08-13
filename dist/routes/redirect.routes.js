"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncErrorHandler_middleware_1 = require("../middlewares/asyncErrorHandler.middleware");
const redirectHash_controller_1 = require("../controller/redirectHash.controller");
const router = (0, express_1.Router)();
router.get("/:hash", (0, asyncErrorHandler_middleware_1.asyncMiddleware)(redirectHash_controller_1.redirectHashController));
exports.default = router;
