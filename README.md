# pluribuild

Build multiple entry points into multiple output files with a single command.

Run `npx pluribuild` to build:
- `entries/<name>/src/index.ts(x)` into `dist/<name>/index.js`;
- `entries/<name>/x.ts(x)` into `dist/<name>/x.js` (`index` as `x` is fine, too).

Run `npx pluribuild <dir>` to point to a parent directory other than `entries`.

Add `--dev` to the command to enable rebuilds on code changes. Add `--minify=off` to turn off minification.
