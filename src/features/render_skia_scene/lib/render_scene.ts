import type { Canvas, CanvasKit } from "canvaskit-wasm";

import type { PixiDisplayObjectType } from "@/src/shared/lib/pixi";
import type { PixiContainerType } from "@/src/shared";

import { renderDisplayObject } from "./render_display_object";

/**
 * Renders Pixi scene children to Skia surface
 *
 * @param CanvasKit - CanvasKit instance
 * @param canvas - Skia canvas for rendering
 * @param scene - Pixi scene to render
 */
export function renderSkiaScene(
  CanvasKit: CanvasKit,
  canvas: Canvas,
  scene: PixiContainerType,
) {
  scene.children.forEach((child: PixiDisplayObjectType) => {
    renderDisplayObject(CanvasKit, canvas, child);
  });
}
