import { connect, set } from "mongoose";
import { DB_CONNECTED } from "../constants/response.contant";

const DB_URI =
  "mongodb://127.0.0.1:27017/UrlShorter?retryWrites=true&w=majority";
// Connect to DataBase
set({ strictQuery: true });
connect(DB_URI).then(() => console.log(DB_CONNECTED));
