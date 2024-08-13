"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const response_contant_1 = require("./constants/response.contant");
require("./database/connection");
const app = (0, express_1.default)();
app.listen(config_1.PORT, () => {
    console.log(response_contant_1.serverCreatedMessage, config_1.PORT);
});
