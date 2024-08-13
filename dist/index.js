"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const response_contant_1 = require("./constants/response.contant");
require("./database/connection");
const startup_1 = require("./startup/startup");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: false, limit: "50mb" }));
app.use((0, cors_1.default)({ origin: "*" }));
(0, startup_1.startUp)(app);
app.listen(config_1.PORT, () => {
    console.log(response_contant_1.serverCreatedMessage, config_1.PORT);
});
