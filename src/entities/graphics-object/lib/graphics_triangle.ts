import { PixiGraphics } from "@/src/shared";

export function createGraphicsTriangle() {
  const triangle = new PixiGraphics();

  triangle.beginFill(0x00ff00);
  triangle.moveTo(0, 0);
  triangle.lineTo(120, 0);
  triangle.lineTo(60, 120);
  triangle.lineTo(0, 0);

  triangle.endFill();
  triangle.position.set(150, 100);

  return triangle;
}
