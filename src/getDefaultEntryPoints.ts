import { globSync } from "node:fs";
import { sep } from "node:path";
import { toEntryPoint } from "./toEntryPoint.ts";

export function getDefaultEntryPoints(dir: string, ignore?: string[]) {
  let entryPoints = new Map([
    // entries/x/src/index.ts -> dist/x/index.js
    ...globSync(`${dir}/[!_]*/src/index.{ts,tsx}`, {
      exclude: ignore?.map((subdir) => `${dir}/${subdir}/src/index.{ts,tsx}`),
    }).map(
      toEntryPoint((path) => {
        let p = path.split(sep);
        return `${p.at(-3)}/${p.at(-1)}`;
      }),
    ),
    // entries/x/index.ts -> dist/x/index.js (overrides entries/x/src/index.ts, if present)
    // entries/x/y.ts -> dist/x/y.js
    ...globSync(`${dir}/[!_]*/[!_]*.{ts,tsx}`, {
      exclude: ignore?.map((subdir) => `${dir}/${subdir}/[!_]*.{ts,tsx}`),
    }).map(toEntryPoint((path) => path.split(sep).slice(-2).join("/"))),
  ]);

  return Array.from(entryPoints.values());
}
