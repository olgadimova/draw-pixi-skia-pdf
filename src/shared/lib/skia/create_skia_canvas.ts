"use client";

import { type CanvasKit } from "canvaskit-wasm";

let canvasKitPromise: Promise<CanvasKit> | null = null;

/**
 * Loads and initializes the custom CanvasKit WASM runtime.
 *
 * The initialization promise is cached so CanvasKit is loaded
 * only once during the application lifetime.
 */
export async function createSkiaCanvas(): Promise<CanvasKit> {
  if (canvasKitPromise) {
    return canvasKitPromise;
  }

  canvasKitPromise = new Promise((resolve, reject) => {
    if (window.CanvasKitInit) {
      window
        .CanvasKitInit({
          locateFile: (file: string) => `/canvaskit/${file}`,
        })
        .then(resolve)
        .catch(reject);

      return;
    }

    const script = document.createElement("script");
    script.src = "/canvaskit/canvaskit.js";
    script.async = true;
    script.onload = async () => {
      try {
        const CanvasKit = await window.CanvasKitInit({
          locateFile: (file: string) => `/canvaskit/${file}`,
        });

        resolve(CanvasKit);
      } catch (error) {
        reject(error);
      }
    };

    script.onerror = reject;

    document.body.appendChild(script);
  });

  return canvasKitPromise;
}
