"use client";

const canvasKitSrc: string = "https://unpkg.com/canvaskit-wasm@0.41.1/bin/full";
// eslint-disable-next-line
let canvasKitPromise: Promise<any> | null = null;

export async function createSkiaCanvas() {
  if (canvasKitPromise) {
    return canvasKitPromise;
  }

  canvasKitPromise = new Promise((resolve, reject) => {
    if (window.CanvasKitInit) {
      window
        .CanvasKitInit({
          locateFile: (file: string) => `${canvasKitSrc}/${file}`,
        })
        .then(resolve)
        .catch(reject);

      return;
    }

    const script = document.createElement("script");
    script.src = `${canvasKitSrc}/canvaskit.js`;
    script.async = true;
    script.onload = async () => {
      try {
        const CanvasKit = await window.CanvasKitInit({
          locateFile: (file: string) => `${canvasKitSrc}/${file}`,
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
