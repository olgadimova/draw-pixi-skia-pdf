"use client";

import { useEffect, useRef } from "react";
import type {
  PixiApplicationType,
  PixiContainerType,
} from "@/src/shared/lib/pixi";
import { PixiApplication } from "@/src/shared/lib/pixi";

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
      if (ref.current) {
        ref.current.innerHTML = "";

        if (!appRef.current) {
          appRef.current = new PixiApplication({
            width: 400,
            height: 300,
            backgroundColor: 0xd1d5dc,
            forceCanvas: true,
          });
        }

        ref.current?.appendChild(appRef.current?.view as HTMLCanvasElement);

        const appScene = await initScene();
        onSceneReadyAction(appScene);
      }
    }

    init();

    return () => {
      appRef.current?.stage?.removeChildren();
      appRef.current?.destroy(true, true);
    };
  }, [onSceneReadyAction]);

  useEffect(() => {
    if (scene && appRef.current) {
      appRef.current.stage.addChild(scene);
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
