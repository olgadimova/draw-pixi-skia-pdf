"use client";

import { useState, useCallback } from "react";
import * as PIXI from "pixi.js-legacy";

import { DrawingBoard, Navbar } from "@/src/widgets";
import { createRandomGraphicsObject } from "@/src/entities";

export function Main() {
  const [scene, setScene] = useState<PIXI.Container | null>(null);

  const handleSceneCreated = useCallback((createdScene: PIXI.Container) => {
    setScene(createdScene);
  }, []);

  const handleGenerateRandomShape = () => {
    if (scene) {
      scene.removeChildren();

      Array.from({ length: 5 }).forEach(() => {
        scene.addChild(createRandomGraphicsObject());
      });
    }
  };

  return (
    <div className="flex gap-4 justify-start">
      <Navbar handleGenerateRandomShape={handleGenerateRandomShape} />
      <section>
        <DrawingBoard scene={scene} onSceneReadyAction={handleSceneCreated} />
      </section>
    </div>
  );
}
