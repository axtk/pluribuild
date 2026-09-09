import esbuild, { type BuildOptions as EsbuildOptions } from "esbuild";
import type { BuildOptions } from "./BuildOptions.ts";
import { getDefaultEntryPoints } from "./getDefaultEntryPoints.ts";

export async function build({
  entryPoints,
  dev,
  dir,
  ...options
}: BuildOptions = {}) {
  let e = entryPoints ?? getDefaultEntryPoints(dir);

  if (Object.keys(e).length === 0) {
    console.warn("No entry points");
    return;
  }

  let buildOptions: EsbuildOptions = {
    entryPoints: e,
    outdir: "dist",
    bundle: true,
    splitting: true,
    format: "esm",
    jsx: "automatic",
    loader: {
      ".png": "dataurl",
      ".svg": "dataurl",
      ".html": "text",
      ".txt": "text",
    },
    minify: true,
    ...options,
  };

  if (dev) {
    let ctx = await esbuild.context(buildOptions);
    await ctx.watch();
  } else await esbuild.build(buildOptions);
}
