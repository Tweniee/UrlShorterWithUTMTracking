"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidHashService = exports.updateAndValidateHash = void 0;
const axios_1 = __importDefault(require("axios"));
const tracking_model_1 = require("../model/tracking.model");
const urlSorter_model_1 = require("../model/urlSorter.model");
const updateAndValidateHash = (hash, ip) => __awaiter(void 0, void 0, void 0, function* () {
    // return new Promise((resolve, reject) => {
    axios_1.default
        .get(`https://ipinfo.io/${ip}/json`)
        .then((item) => {
        if (item.data.city) {
            //gonna store all the hash in tracking table weather its valid or not
            //because data is Data
            const { ip, city, region, country, loc, postal, timezone } = item.data;
            tracking_model_1.trackingModel.create({
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
});
exports.updateAndValidateHash = updateAndValidateHash;
const checkValidHashService = (hash) => __awaiter(void 0, void 0, void 0, function* () {
    const isHashPresent = yield urlSorter_model_1.urlModel.aggregate([
        {
            $match: {
                hash: hash,
                validTimes: { $gte: 1 },
            },
        },
        {
            $project: {
                originalUrl: 1,
                validTimes: 1
            },
        },
    ]);
    if (isHashPresent.length > 0) {
        const newValidTimes = Number(isHashPresent[0].validTimes) - 1;
        urlSorter_model_1.urlModel
            .updateOne({ hash: hash }, {
            $set: { validTimes: newValidTimes },
        })
            .then((itemn) => {
            // console.log(itemn);
        });
    }
    return isHashPresent;
});
exports.checkValidHashService = checkValidHashService;
