import { Schema, model, Document } from "mongoose";

// Define an interface for the Tracking document
interface ITracking extends Document {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  postal: string;
  timezone: string;
  hash: string;
}

// Define the Mongoose schema corresponding to the interface
const trackingSchema = new Schema<ITracking>(
  {
    ip: { type: String, required: true },
    city: { type: String, required: true },
    region: { type: String, required: true },
    country: { type: String, required: true },
    loc: { type: String, required: true },
    postal: { type: String, required: true },
    timezone: { type: String, required: true },
    hash: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

// Create and export the model
export const trackingModel = model<ITracking>("Tracking", trackingSchema);
