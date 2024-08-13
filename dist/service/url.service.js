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
exports.updateInsertUrlShortnerService = exports.isDuplicateRequest = exports.urlShortnerService = void 0;
const urlSorter_model_1 = require("../model/urlSorter.model");
const shortid_1 = __importDefault(require("shortid"));
const urlShortnerService = (baseUrl, body) => __awaiter(void 0, void 0, void 0, function* () {
    const { originalUrl, utmSource, utmMedium, utmCampaign, validTimes } = body;
    console.log(baseUrl);
    const hash = shortid_1.default.generate();
    const shortUrl = baseUrl + "/" + hash;
    const newUrl = new urlSorter_model_1.urlModel({
        originalUrl,
        shortUrl,
        hash,
        utmSource,
        utmMedium,
        utmCampaign,
        validTimes,
    });
    const url = yield newUrl.save();
    return url;
});
exports.urlShortnerService = urlShortnerService;
const isDuplicateRequest = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { originalUrl, utmSource, utmMedium, utmCampaign, validTimes } = body;
    const existingUrl = yield urlSorter_model_1.urlModel.aggregate([
        {
            $match: {
                originalUrl: originalUrl,
            },
        },
    ]);
    return existingUrl;
});
exports.isDuplicateRequest = isDuplicateRequest;
const updateInsertUrlShortnerService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const { originalUrl, utmSource, utmMedium, utmCampaign, validTimes } = body;
    const updatedDocument = yield urlSorter_model_1.urlModel.findOneAndUpdate({ _id: id }, {
        $set: { originalUrl, utmSource, utmMedium, utmCampaign, validTimes },
    }, { new: true });
    return updatedDocument;
});
exports.updateInsertUrlShortnerService = updateInsertUrlShortnerService;
