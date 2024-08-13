import express from "express";
import { PORT } from "./config/config";
import { serverCreatedMessage } from "./constants/response.contant";
import "./database/connection";
import { startUp } from "./startup/startup";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cors({ origin: "*" }));
startUp(app);

app.listen(PORT, () => {
  console.log(serverCreatedMessage, PORT);
});
