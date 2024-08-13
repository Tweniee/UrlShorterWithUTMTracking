"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const response_contant_1 = require("../constants/response.contant");
const DB_URI = "mongodb://127.0.0.1:27017/UrlShorter?retryWrites=true&w=majority";
// Connect to DataBase
(0, mongoose_1.set)({ strictQuery: true });
(0, mongoose_1.connect)(DB_URI).then(() => console.log(response_contant_1.DB_CONNECTED));
