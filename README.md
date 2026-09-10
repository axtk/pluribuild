# pluribuild

Build multiple entry points into multiple output files with a single command and esbuild under the hood.

## CLI

Run `npx pluribuild` to build:
- `entries/<name>/src/index.ts(x)` into `dist/<name>/index.js`;
- `entries/<name>/x.ts(x)` into `dist/<name>/x.js` (`index` as `x` is fine, too).

Subdirectories of `entries` and entry point files whose names start with an underscore are ignored. Add `--ignore <subdir1> [<subdir2> ...]` to the command to additionally ignore the specified subdirectories of `entries`.

Run `npx pluribuild <dir>` to point to a parent directory other than `entries`.

Add `--dev` to the command to enable rebuilds on code changes. Add `--minify=off` to turn off minification.

## Code

```ts
import { build } from "pluribuild";

await build({
  dir: "entries",  // Default
  ignore: ["lib"], // Default: not set, ignores all starting with "_"
  minify: true,    // Default
  dev: false,      // Default
});
```
