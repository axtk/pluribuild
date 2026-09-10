import type { BuildOptions as EsbuildOptions } from "esbuild";

export type BuildOptions = EsbuildOptions & {
  /**
   * Directory containing entry points.
   * @default "entries"
   */
  dir?: string;
  /** List of ignored subdirectories of `dir`. */
  ignore?: string[];
  /** Development mode. Enables rebuilds on code changes. */
  dev?: boolean;
};
