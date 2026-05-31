"use client";

import { useState, useCallback, useEffect } from "react";
import type { CanvasKit as CanvasKitType } from "canvaskit-wasm";

import { createSkiaCanvas, PixiContainerType } from "@/src/shared";
import { PixiContainer } from "@/src/shared";
import { PixiBoard, Navbar, SkiaBoard } from "@/src/widgets";
import { createRandomGraphicsObject } from "@/src/entities";
import { exportSceneToPdf } from "@/src/features";

export function Main() {
  const [scene, setScene] = useState<PixiContainerType | null>(null);
  const [canvasKit, setCanvasKit] = useState<CanvasKitType | null>(null);

  // setup CanvasKit
  useEffect(() => {
    const initCanvasKit = async () => {
      const canvasKit: CanvasKitType = await createSkiaCanvas();
      setCanvasKit(canvasKit);
    };

    initCanvasKit();
  }, []);

  const handleSceneCreated = useCallback((createdScene: PixiContainerType) => {
    setScene(createdScene);
  }, []);

  const handleGenerateRandomShape = useCallback(() => {
    if (scene) {
      const nextScene = new PixiContainer();

      scene.removeChildren();

      Array.from({ length: 5 }).forEach(() => {
        nextScene.addChild(createRandomGraphicsObject());
      });

      setScene(nextScene);
    }
  }, [scene]);

  const handleExportSceneToPdf = useCallback(() => {
    if (scene && canvasKit) {
      exportSceneToPdf(canvasKit, scene);
    }
  }, [scene, canvasKit]);

  return (
    <div className="flex gap-4 justify-center w-full">
      <Navbar
        onGenerateRandomShape={handleGenerateRandomShape}
        onExportSceneToPdf={handleExportSceneToPdf}
      />
      <section className="flex justify-center gap-10">
        <PixiBoard scene={scene} onSceneReadyAction={handleSceneCreated} />

        {canvasKit && <SkiaBoard scene={scene} CanvasKit={canvasKit} />}
      </section>
    </div>
  );
}
