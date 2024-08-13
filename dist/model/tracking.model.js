"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackingModel = void 0;
const mongoose_1 = require("mongoose");
// Define the Mongoose schema corresponding to the interface
const trackingSchema = new mongoose_1.Schema({
    ip: { type: String, required: true },
    city: { type: String, required: true },
    region: { type: String, required: true },
    country: { type: String, required: true },
    loc: { type: String, required: true },
    postal: { type: String, required: true },
    timezone: { type: String, required: true },
    hash: { type: String, required: true },
}, { timestamps: true, versionKey: false });
// Create and export the model
exports.trackingModel = (0, mongoose_1.model)("Tracking", trackingSchema);
