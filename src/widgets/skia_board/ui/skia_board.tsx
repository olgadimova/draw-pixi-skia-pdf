"use client";

import { useEffect, useRef, useState } from "react";
import type {
  CanvasKit as CanvasKitType,
  Surface,
  Canvas,
} from "canvaskit-wasm";

import { createSkiaSurface, type PixiContainerType } from "@/src/shared";
import { renderSkiaScene } from "@/src/features";

type Props = {
  CanvasKit: CanvasKitType | null;
  scene: PixiContainerType | null;
  onCanvasKitReadyAction: (ck: CanvasKitType) => void;
};

export function SkiaBoard({ CanvasKit, scene }: Props) {
  const [surface, setSurface] = useState<Surface | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    async function init() {
      if (canvasRef.current && CanvasKit) {
        // create canvas surface
        const canvasSurface: Surface = createSkiaSurface(
          CanvasKit,
          canvasRef.current,
        );
        setSurface(canvasSurface);
      }
    }

    init();
  }, [CanvasKit]);

  // Render Pixi scene to Skia canvas
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
