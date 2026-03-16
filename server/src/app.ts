import express, { type Response } from "express";
import cors from "cors";
import config from "./config";
import { prisma } from "./utils/prisma";
import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";

const app = express();

app.use(
  cors({
    origin: [config.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.get("/", (_, res: Response) => {
  return res.json({
    hello: "world",
  });
});

app.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.json({
      error: "Unauthorized",
    });
  }

  return res.json(session);
});

app.get("/users", async (_, res: Response) => {
  const users = await prisma.user.findMany();

  return res.json({
    users,
  });
});

export default app;
