"use client";

import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js-legacy";

import { initScene } from "@/src/entities";

type Props = {
  scene: PIXI.Container | null;
  onSceneReadyAction: (scene: PIXI.Container) => void;
};

export function DrawingBoard({ scene, onSceneReadyAction }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);

  useEffect(() => {
    async function init() {
      if (ref.current) {
        ref.current.innerHTML = "";

        if (!appRef.current) {
          appRef.current = new PIXI.Application({
            width: 400,
            height: 300,
            backgroundColor: 0xcccccc,
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

  return <div ref={ref} />;
}
