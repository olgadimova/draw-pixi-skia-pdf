import type {
  PixiGraphicsType,
  PixiGraphicsGeometryType,
  PixiGraphicsDataType,
  PixiIShape,
  PixiFillStyle,
} from "@/src/shared";
import { PIXI_SHAPES } from "@/src/shared";
import type {
  CanvasKit as CanvasKitType,
  Canvas,
  PathBuilder,
  Path,
  Paint,
} from "canvaskit-wasm";

export function displayGraphics(
  CanvasKit: CanvasKitType,
  canvas: Canvas,
  graphics: PixiGraphicsType,
) {
  const geometry: PixiGraphicsGeometryType = graphics.geometry;
  const graphicsData: PixiGraphicsDataType[] = geometry.graphicsData;

  graphicsData.forEach((data: PixiGraphicsDataType) => {
    const shape: PixiIShape = data.shape;
    const fill: PixiFillStyle = data.fillStyle;

    const paint: Paint = new CanvasKit.Paint();
    paint.setAntiAlias(true);

    // Apply color from Pixi to Skia
    const color: number = fill.color;

    const r: number = (color >> 16) & 255;
    const g: number = (color >> 8) & 255;
    const b: number = color & 255;

    paint.setColor(CanvasKit.Color(r, g, b, 1));

    // Apply translate, rotate and scale from Pixi to Skia
    canvas.save();

    canvas.translate(graphics.x, graphics.y);
    canvas.rotate(graphics.rotation * (180 / Math.PI), 0, 0);
    canvas.scale(graphics.scale.x, graphics.scale.y);

    // Rectangle Shape
    if (shape.type === PIXI_SHAPES.RECT) {
      canvas.drawRect(
        CanvasKit.XYWHRect(shape.x, shape.y, shape.width, shape.height),
        paint,
      );
    }

    // Circle Shape
    if (shape.type === PIXI_SHAPES.CIRC) {
      canvas.drawCircle(shape.x, shape.y, shape.radius, paint);
    }

    // Triangle Shape
    if (shape.type === PIXI_SHAPES.POLY) {
      const pathBuilder: PathBuilder = new CanvasKit.PathBuilder();

      const points: number[] = shape.points;

      pathBuilder.moveTo(points[0], points[1]);

      for (let i = 2; i < points.length; i += 2) {
        pathBuilder.lineTo(points[i], points[i + 1]);
      }

      pathBuilder.close();
      const path: Path = pathBuilder.detach();

      canvas.drawPath(path, paint);
    }

    canvas.restore();
  });
}
