"use client";

import { useEffect, useRef, useState } from "react";
import type {
  CanvasKit as CanvasKitType,
  Surface,
  Canvas,
} from "canvaskit-wasm";

import {
  CANVAS_BACKGROUND_COLOR,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  createSkiaSurface,
  type PixiContainerType,
} from "@/src/shared";
import { renderSkiaScene } from "@/src/features";

type Props = {
  CanvasKit: CanvasKitType;
  scene: PixiContainerType | null;
};

/*
 * Skia Board component
 *
 * @param scene - Pixi scene to render to Skia surface
 */
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
    if (surface && scene) {
      const canvas: Canvas = surface.getCanvas();

      canvas.clear(CanvasKit.parseColorString(CANVAS_BACKGROUND_COLOR));
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
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="bg-gray-300 w-[300px] md:w-[400px] h-auto"
      />
    </div>
  );
}
