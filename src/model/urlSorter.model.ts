import { Schema, model } from "mongoose";

// Interface of User model
export interface IUrl {
  originalUrl: string;
  shortUrl: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
}

export interface IUrlSchema extends IUrl, Document {}

const UrlSchema = new Schema(
  {
    originalUrl: { type: String, require: true, unique: true },
    shortUrl: { type: String, require: true, unique: true },
    utmSource: { type: String, default: "Global" },
    utmMedium: { type: String, default: "Global" },
    utmCampaign: { type: String, default: "Global" },
  },
  { timestamps: true, versionKey: false }
);

const Url = model<IUrlSchema>("UrlSchema", UrlSchema);
