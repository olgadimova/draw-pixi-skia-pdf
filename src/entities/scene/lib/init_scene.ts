import type { PixiDisplayObjectType } from "@/src/shared";
import { PixiContainer } from "@/src/shared";

export async function initScene(): Promise<
  PixiContainer<PixiDisplayObjectType>
> {
  return new PixiContainer();
}
