import { PixiContainer, type PixiDisplayObjectType } from "@/src/shared";

export async function initScene(): Promise<
  PixiContainer<PixiDisplayObjectType>
> {
  return new PixiContainer();
}
