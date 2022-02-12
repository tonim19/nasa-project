import express from "express";
import planetsRouter from "./routes/planets/planets.router.js";
import launchesRouter from "./routes/launches/launches.router.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cors from "cors";
import morgan from "morgan";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(launchesRouter);
app.use(planetsRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export default app;
