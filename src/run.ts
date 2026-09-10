#!/usr/bin/env node
import { Args, isKey } from "args-json";
import type { BuildOptions } from "./BuildOptions.ts";
import { build } from "./build.ts";

let args = new Args();
let dev = args.hasKey("--dev");

let options: BuildOptions = {
  dev,
  minify: !args.isExplicitlyOff("--minify"),
  ignore: args.getValues("--ignore"),
};

let rawArgs = process.argv.slice(2);
if (rawArgs.length !== 0 && !isKey(rawArgs[0])) options.dir = rawArgs[0];

for (let [k, v] of Object.entries(options)) {
  if (v === undefined) delete options[k as keyof BuildOptions];
}

build(options).then(() => {
  if (dev) console.log("Initial build complete");
  else console.log("Build complete");
});
