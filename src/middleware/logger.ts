import env from "@config/env";
import crypto from "node:crypto";
import PinoHttp from "pino-http";

const pino = PinoHttp({
  ...(env.NODE_ENV !== "production" && {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
      },
    },
  }),
  level: env.LOG_LEVEL || "info",
  genReqId: () => crypto.randomUUID(),
});

export default pino;
