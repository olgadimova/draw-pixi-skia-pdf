import type { Canvas, CanvasKit } from "canvaskit-wasm";

import type { PixiDisplayObjectType } from "@/src/shared/lib/pixi";
import type { PixiContainerType } from "@/src/shared";

import { renderDisplayObject } from "./render_display_object";

export function renderSkiaScene(
  CanvasKit: any,
  canvas: Canvas,
  scene: PixiContainerType,
) {
  scene.children.forEach((child: PixiDisplayObjectType) => {
    renderDisplayObject(CanvasKit, canvas, child);
  });
}
