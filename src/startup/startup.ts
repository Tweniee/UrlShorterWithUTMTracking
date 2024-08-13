import { Application, NextFunction, Request, Response } from "express";
import { redirectRoute, urlRoute } from "../routes";
import { requestLoggerMiddleware } from "../middlewares/response.middleware";
import { invalidRouteHandlerMiddleware } from "../middlewares/invalidUrl.middleware";

export const startUp = (app: Application) => {
  app.use(requestLoggerMiddleware);
  // Handling the short Url
  app.use("/", redirectRoute);
  app.use("/v1", urlRoute);
  // Handle invalid route on server
  app.use("*", invalidRouteHandlerMiddleware);
};
