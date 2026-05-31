import type { PixiContainerType } from "@/src/shared";
import { renderSkiaScene } from "@/src/features";

export const exportSceneToPdf = (CanvasKit: any, scene: PixiContainerType) => {
  const pdf = new CanvasKit.PDFDocument();

  const canvas = pdf.beginPage(800, 600);

  renderSkiaScene(CanvasKit, canvas, scene);

  pdf.endPage();
  pdf.close();

  const bytes = pdf.getBytesData();

  const blob = new Blob([bytes], {
    type: "application/pdf",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = "skia_scene.pdf";

  a.click();
};
