import type { CanvasKit, Canvas } from "canvaskit-wasm";

import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  type PixiContainerType,
} from "@/src/shared";
import { renderSkiaScene } from "@/src/features";

export const exportSceneToPdf = (
  CanvasKit: CanvasKit,
  scene: PixiContainerType,
) => {
  /**
   * PDF export uses a custom CanvasKit build with additional
   * Emscripten bindings exposing Skia's PDF backend.
   */
  const pdf = new CanvasKit.PDFDocument();

  const canvas: Canvas = pdf.beginPage(CANVAS_WIDTH, CANVAS_HEIGHT);

  renderSkiaScene(CanvasKit, canvas, scene);

  pdf.endPage();
  pdf.close();

  const bytes: Uint8Array | null = pdf.getBytesData();

  if (!bytes) return;

  const blob = new Blob([bytes.buffer as ArrayBuffer], {
    type: "application/pdf",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = "skia_scene.pdf";

  a.click();
};
