"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UrlSchema = new mongoose_1.Schema({
    originalUrl: { type: String, require: true, unique: true },
    shortUrl: { type: String, require: true, unique: true },
    utmSource: { type: String, default: "Global" },
    utmMedium: { type: String, default: "Global" },
    utmCampaign: { type: String, default: "Global" },
}, { timestamps: true, versionKey: false });
const Url = (0, mongoose_1.model)("UrlSchema", UrlSchema);
