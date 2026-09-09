import type { EntryPoint } from "./EntryPoint.ts";

export function toEntryPoint(toName: (path: string) => string | undefined) {
  return (path: string): [string, EntryPoint] => {
    let name = toName(path);

    if (!name) throw new Error(`Invalid entry point name: "${path}"`);
    name = name.replace(/\.\w+$/, "");

    return [
      name,
      {
        in: path,
        out: name,
      },
    ];
  };
}
