import { urlModel } from "../model/urlSorter.model";
import shortid from "shortid";
export const urlShortnerService = async (baseUrl: string, body: any) => {
  const { originalUrl, utmSource, utmMedium, utmCampaign, validTimes } = body;
  console.log(baseUrl);
  const hash = shortid.generate();
  const shortUrl = baseUrl + "/" + hash;
  const newUrl = new urlModel({
    originalUrl,
    shortUrl,
    hash,
    utmSource,
    utmMedium,
    utmCampaign,
    validTimes,
  });
  const url = await newUrl.save();
  return url;
};

export const isDuplicateRequest = async (body: any) => {
  const { originalUrl, utmSource, utmMedium, utmCampaign, validTimes } = body;
  const existingUrl = await urlModel.aggregate([
    {
      $match: {
        originalUrl: originalUrl,
      },
    },
  ]);
  return existingUrl;
};

export const updateInsertUrlShortnerService = async (id: string, body: any) => {
  const { originalUrl, utmSource, utmMedium, utmCampaign, validTimes } = body;
  const updatedDocument = await urlModel.findOneAndUpdate(
    { _id: id },
    {
      $set: { originalUrl, utmSource, utmMedium, utmCampaign, validTimes },
    },
    { new: true }
  );
  return updatedDocument;
};
