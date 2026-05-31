"use client";

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
          locateFile: (file: string) => `/canvaskit/${file}`,
        })
        .then(resolve)
        .catch(reject);

      return;
    }

    const script = document.createElement("script");
    script.src = `/canvaskit/canvaskit.js`;
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
