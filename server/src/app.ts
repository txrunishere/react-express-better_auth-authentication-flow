import express, { type Response } from "express";
import cors from "cors";
import config from "./config";

const app = express();

app.use(
  cors({
    origin: [config.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (_, res: Response) => {
  return res.json({
    hello: "world",
  });
});

export default app;
