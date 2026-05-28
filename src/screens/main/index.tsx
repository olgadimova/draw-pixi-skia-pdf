"use client";

import { useState, useCallback } from "react";
import type { PixiContainerType } from "@/src/shared";
import { PixiContainer } from "@/src/shared";

import { PixiBoard, Navbar, SkiaBoard } from "@/src/widgets";
import { createRandomGraphicsObject } from "@/src/entities";

export function Main() {
  const [scene, setScene] = useState<PixiContainerType | null>(null);

  const handleSceneCreated = useCallback((createdScene: PixiContainerType) => {
    setScene(createdScene);
  }, []);

  const handleGenerateRandomShape = () => {
    if (scene) {
      const nextScene = new PixiContainer();

      scene.removeChildren();

      Array.from({ length: 5 }).forEach(() => {
        nextScene.addChild(createRandomGraphicsObject());
      });

      setScene(nextScene);
    }
  };

  const handleExportSceneToPdf = () => {};

  return (
    <div className="flex gap-4 justify-center w-full">
      <Navbar
        onGenerateRandomShape={handleGenerateRandomShape}
        onExportSceneToPdf={handleExportSceneToPdf}
      />
      <section className="flex justify-center gap-10">
        <PixiBoard scene={scene} onSceneReadyAction={handleSceneCreated} />
        <SkiaBoard scene={scene} />
      </section>
    </div>
  );
}
