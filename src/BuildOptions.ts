import type { BuildOptions as EsbuildOptions } from "esbuild";

export type BuildOptions = EsbuildOptions & {
  /** Directory containing entry points. */
  dir?: string;
  /** Development mode. Enables rebuilds on code changes. */
  dev?: boolean;
};
