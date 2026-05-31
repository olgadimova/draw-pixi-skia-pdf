import type { type CanvasKit, CanvasKitInitOptions } from "canvaskit-wasm";

declare global {
  interface Window {
    CanvasKitInit: (options?: CanvasKitInitOptions) => Promise<CanvasKit>;
  }
}

export {};
