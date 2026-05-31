"use client";

import { useEffect, useRef } from "react";

import type {
  PixiApplicationType,
  PixiContainerType,
  PixiDisplayObjectType,
  PixiICanvas,
} from "@/src/shared";
import { initPixiApplication } from "@/src/shared";
import { initScene } from "@/src/entities";

type Props = {
  scene: PixiContainerType | null;
  onSceneReadyAction: (scene: PixiContainerType) => void;
};

export function PixiBoard({ scene, onSceneReadyAction }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const appRef = useRef<PixiApplicationType | null>(null);

  useEffect(() => {
    async function init() {
      const container: HTMLDivElement | null = ref.current;

      if (!container) return;

      let app: PixiApplicationType<PixiICanvas> | null = appRef.current;

      if (!app) {
        app = initPixiApplication();
        appRef.current = app;
      }

      if (app.view.parentNode !== container) {
        container.appendChild(app.view as HTMLCanvasElement);
      }

      const appScene: PixiContainerType<PixiDisplayObjectType> =
        await initScene();

      onSceneReadyAction(appScene);
    }

    init();

    return () => {
      // Clean out Pixi application on unmount
      appRef.current?.stage?.removeChildren();
      appRef.current?.destroy(true, true);
      appRef.current = null;
    };
  }, [onSceneReadyAction]);

  useEffect(() => {
    if (scene && appRef.current) {
      appRef.current.stage?.addChild(scene);
    }
  }, [scene]);

  return (
    <div>
      <h3>Pixi Container</h3>
      <br />
      <div ref={ref}></div>
    </div>
  );
}
