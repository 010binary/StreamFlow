import type { Request, Response } from "express";

import express from "express";

import pino from "@/middleware/logger";

const app = express();

// Add pino logger
app.use(pino);

app.get("/", (req: Request, res: Response) => {
  res.send("server is running properly");
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Server is running @ http://localhost:3000");
});
