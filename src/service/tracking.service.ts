import axios from "axios";
import { trackingModel } from "../model/tracking.model";
import { urlModel } from "../model/urlSorter.model";

export const updateAndValidateHash = async (hash: string, ip: any) => {
  // return new Promise((resolve, reject) => {
  axios
    .get(`https://ipinfo.io/${ip}/json`)
    .then((item) => {
      if (item.data.city) {
        //gonna store all the hash in tracking table weather its valid or not
        //because data is Data
        const { ip, city, region, country, loc, postal, timezone } = item.data;
        trackingModel.create({
          ip,
          city,
          region,
          country,
          loc,
          postal,
          timezone,
          hash,
        });
      }
    })
    .catch((err) => {
      // reject(err);
    });
  // });
  //   return response;
};

export const checkValidHashService = async (hash: string) => {
  const isHashPresent = await urlModel.aggregate([
    {
      $match: {
        hash: hash,
        validTimes: { $gte: 1 },
      },
    },
    {
      $project: {
        originalUrl: 1,
        validTimes:1
      },
    },
  ]);

  if (isHashPresent.length > 0) {
    const newValidTimes = Number(isHashPresent[0].validTimes) - 1;
    urlModel
      .updateOne(
        { hash: hash },
        {
          $set: { validTimes: newValidTimes },
        }
      )
      .then((itemn) => {
        // console.log(itemn);
      });
  }
  return isHashPresent;
};
