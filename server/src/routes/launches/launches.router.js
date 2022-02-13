import express from "express";
import {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} from "./launches.controller.js";

const launchesRouter = express.Router();

launchesRouter.get("/launches", httpGetAllLaunches);

launchesRouter.post("/launches", httpAddNewLaunch);

launchesRouter.delete("/launches/:id", httpAbortLaunch);

export default launchesRouter;
