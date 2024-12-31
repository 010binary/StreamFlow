import "./register.paths";

import type { Request, Response } from "express";

import env from "@config/env";
import pino from "@middleware/logger";
import express from "express";

const app = express();

// Add pino logger
app.use(pino);

app.get("/", (req: Request, res: Response) => {
  res.send("server is running properly");
});

app.listen(env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running @ http://localhost:${env.PORT}`);
});
