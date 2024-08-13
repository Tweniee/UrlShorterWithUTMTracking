"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlModel = void 0;
const mongoose_1 = require("mongoose");
const UrlSchema = new mongoose_1.Schema({
    originalUrl: { type: String, require: true, unique: true },
    shortUrl: { type: String, require: true, unique: true },
    hash: { type: String, require: true, unique: true },
    utmSource: { type: String, default: "Global" },
    utmMedium: { type: String, default: "Global" },
    utmCampaign: { type: String, default: "Global" },
    validTimes: { type: Number, default: 1 },
}, { timestamps: true, versionKey: false });
exports.urlModel = (0, mongoose_1.model)("UrlSchema", UrlSchema);
