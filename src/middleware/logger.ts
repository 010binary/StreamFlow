import PinoHttp from "pino-http";

const pino = PinoHttp({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
    },
  },
  genReqId: () => crypto.randomUUID(),
});

export default pino;
