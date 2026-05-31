"use client";

import { useEffect, useRef } from "react";

import {
  PixiApplicationType,
  PixiContainerType,
  PixiDisplayObjectType,
} from "@/src/shared/lib/pixi";
import { initPixiApplication, initScene } from "@/src/entities";

type Props = {
  scene: PixiContainerType | null;
  onSceneReadyAction: (scene: PixiContainerType) => void;
};

export function PixiBoard({ scene, onSceneReadyAction }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const appRef = useRef<PixiApplicationType | null>(null);

  useEffect(() => {
    async function init() {
      const container = ref.current;

      if (!container) return;

      let app = appRef.current;

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
