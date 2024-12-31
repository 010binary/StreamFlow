import { addAlias } from "module-alias";
import { resolve } from "node:path";

addAlias("@middleware", resolve(__dirname, "middleware"));
addAlias("@config", resolve(__dirname, "config"));

