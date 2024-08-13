"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectRoute = exports.urlRoute = void 0;
const url_routes_1 = __importDefault(require("./url.routes"));
exports.urlRoute = url_routes_1.default;
const redirect_routes_1 = __importDefault(require("./redirect.routes"));
exports.redirectRoute = redirect_routes_1.default;
