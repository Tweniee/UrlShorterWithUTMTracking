import express from "express";
import { PORT } from "./config/config";
import { serverCreatedMessage } from "./constants/response.contant";
import "./database/connection"
const app = express();

app.listen(PORT, () => {
  console.log(serverCreatedMessage, PORT);
});
