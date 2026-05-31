import "canvaskit-wasm";
import { type Canvas } from "canvaskit-wasm";

// Custom CanvasKit PDFDocument functionality added to CanvasKit wasm build
interface PDFDocumentType {
  beginPage(width: number, height: number): Canvas;
  endPage(): void;
  close(): void;
  getBytesData(): Uint8Array | null;
}

// CanvasKit interface with added PDFDocument functionality
declare module "canvaskit-wasm" {
  interface CanvasKit {
    PDFDocument: new () => PDFDocumentType;
  }
}

export {};
