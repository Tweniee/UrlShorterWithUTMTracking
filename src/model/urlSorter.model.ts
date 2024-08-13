import { Schema, model } from "mongoose";


export interface IUrl {
  originalUrl: string;
  shortUrl: string;
  hash: string,
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
}

export interface IUrlSchema extends IUrl, Document {}

const UrlSchema = new Schema(
  {
    originalUrl: { type: String, require: true, unique: true },
    shortUrl: { type: String, require: true, unique: true },
    hash: { type: String, require: true, unique: true },
    utmSource: { type: String, default: "Global" },
    utmMedium: { type: String, default: "Global" },
    utmCampaign: { type: String, default: "Global" },
    validTimes: { type: Number, default: 1 },
  },
  { timestamps: true, versionKey: false }
);

export const urlModel = model<IUrlSchema>("UrlSchema", UrlSchema);
