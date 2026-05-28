"use client";

import { useEffect, useRef } from "react";
import { CanvasKit, Surface, Canvas } from "canvaskit-wasm";

import { createSkiaCanvas, createSkiaSurface } from "@/src/shared";

export function SkiaBoard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    async function init() {
      if (canvasRef.current) {
        // create container canvas
        const CanvasKit: CanvasKit = await createSkiaCanvas();

        // create canvas surface
        const surface: Surface = createSkiaSurface(
          CanvasKit,
          canvasRef.current,
        );

        const canvas: Canvas = surface.getCanvas();

        const paint = new CanvasKit.Paint();
        paint.setColor(CanvasKit.Color(255, 0, 0, 1));
        canvas.drawRect(CanvasKit.XYWHRect(100, 100, 200, 100), paint);

        surface.flush();
      }
    }

    init();
  }, []);

  return (
    <div>
      <h3>Skia Container</h3>
      <br />
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="bg-gray-300"
      />
    </div>
  );
}
