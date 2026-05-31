import { PixiApplication, type PixiApplicationType } from "@/src/shared";

export function initPixiApplication(): PixiApplicationType {
  return new PixiApplication({
    width: 400,
    height: 300,
    backgroundColor: 0xd1d5dc,
    forceCanvas: true,
  });
}
