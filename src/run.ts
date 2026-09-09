#!/usr/bin/env node
import { Args, isKey } from "args-json";
import { build } from "./build.ts";
import { BuildOptions } from "./BuildOptions.ts";

let args = new Args();

let options: BuildOptions = {
  dev: args.hasKey("--dev"),
  minify: !args.isExplicitlyOff("--minify"),
};

let rawArgs = process.argv.slice(2);
if (rawArgs.length !== 0 && !isKey(rawArgs[0])) options.dir = rawArgs[0];

for (let [k, v] of Object.entries(options)) {
  if (v === undefined) delete options[k as keyof BuildOptions];
}

build(options);
