/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />

// @deno-types="./canvaskit.d.ts";
import { CanvasKitInit, EmulatedCanvas2D } from "./canvaskit.js";

const libcanvas = await CanvasKitInit({
  locateFile: (filename: string): string => {
    const home = Deno.env.get("XDG_DATA_HOME");
    if (home) {
      return `${home}/${filename}`;
    }
    throw `canvas: XDG_DATA_HOME must be set, and must contain \`canvaskit.wasm\``;
  },
});

export function createCanvas(
  width: number,
  height: number,
): EmulatedCanvas2D {
  return libcanvas.MakeCanvas(width, height);
}

// @deno-types="./canvaskit.d.ts";
export * from "./canvaskit.js";
