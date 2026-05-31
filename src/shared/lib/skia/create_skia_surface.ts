"use client";

import type { CanvasKit as CanvasKitType, Surface } from "canvaskit-wasm";

/**
 * Creates Skia surface on a provided canvas
 *
 * @param CanvasKit - CanvasKit instance
 * @param canvas - Canvas element to append surface to
 */
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
