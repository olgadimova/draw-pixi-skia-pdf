import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CANVAS_BACKGROUND_COLOR,
  PixiApplication,
  type PixiApplicationType,
  type PixiICanvas,
} from "@/src/shared";

/**
 * Initializes Pixi Application
 */
export function initPixiApplication(): PixiApplicationType<PixiICanvas> {
  return new PixiApplication({
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    backgroundColor: CANVAS_BACKGROUND_COLOR,
    forceCanvas: true,
  });
}
