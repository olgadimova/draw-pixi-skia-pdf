"use client";

import { useEffect, useRef, useState } from "react";
import type { CanvasKit, Surface, Canvas } from "canvaskit-wasm";

import { createSkiaCanvas, createSkiaSurface } from "@/src/shared";
import type { PixiContainerType } from "@/src/shared/lib/pixi";
import { renderSkiaScene } from "@/src/features";

type Props = {
  scene: PixiContainerType | null;
};

export function SkiaBoard({ scene }: Props) {
  const [CanvasKit, setCanvasKit] = useState<CanvasKit | null>(null);

  const [surface, setSurface] = useState<Surface | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    async function init() {
      if (canvasRef.current) {
        // create container canvas
        const canvasKit: CanvasKit = await createSkiaCanvas();
        setCanvasKit(canvasKit);

        // create canvas surface
        const canvasSurface: Surface = createSkiaSurface(
          canvasKit,
          canvasRef.current,
        );
        setSurface(canvasSurface);
      }
    }

    init();
  }, []);

  useEffect(() => {
    if (CanvasKit && surface && scene) {
      const canvas: Canvas = surface.getCanvas();

      canvas.clear(CanvasKit.Color(209, 213, 220)); // #d1d5dc

      renderSkiaScene(CanvasKit, canvas, scene);

      surface.flush();
    }
  }, [CanvasKit, surface, scene]);

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
