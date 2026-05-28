"use client";

import type {
  CanvasKit as CanvasKitType,
  Surface,
} from "canvaskit-wasm/bin/canvaskit.js";

export function createSkiaSurface(
  CanvasKit: CanvasKitType,
  canvas: HTMLCanvasElement,
) {
  const surface: Surface | null = CanvasKit.MakeCanvasSurface(canvas);

  if (!surface) {
    throw new Error("Failed to create Skia surface");
  }

  return surface;
}
