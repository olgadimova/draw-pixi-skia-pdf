import type { PixiContainerType } from "@/src/shared";
import type { Canvas, CanvasKit } from "canvaskit-wasm";
import type { PixiDisplayObjectType } from "@/src/shared/lib/pixi";

import { renderDisplayObject } from "./render_display_object";

export function renderSkiaScene(
  CanvasKit: CanvasKit,
  canvas: Canvas,
  scene: PixiContainerType,
) {
  scene.children.forEach((child: PixiDisplayObjectType) => {
    renderDisplayObject(CanvasKit, canvas, child);
  });
}
