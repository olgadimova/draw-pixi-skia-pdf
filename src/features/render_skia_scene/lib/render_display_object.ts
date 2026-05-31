import type { Canvas, CanvasKit } from "canvaskit-wasm";

import {
  PixiContainer,
  PixiGraphics,
  type PixiDisplayObjectType,
} from "@/src/shared";

import { displayGraphics } from "./display_graphics";

export function renderDisplayObject(
  CanvasKit: CanvasKit,
  canvas: Canvas,
  object: PixiDisplayObjectType,
) {
  // Graphics
  if (object instanceof PixiGraphics) {
    displayGraphics(CanvasKit, canvas, object);
  }
  // Containers
  else if (object instanceof PixiContainer) {
    object.children.forEach((child) => {
      renderDisplayObject(CanvasKit, canvas, child);
    });
  }
}
