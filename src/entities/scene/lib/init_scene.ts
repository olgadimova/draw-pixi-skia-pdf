import * as PIXI from "pixi.js-legacy";

export async function initScene(): Promise<PIXI.Container<PIXI.DisplayObject>> {
  return new PIXI.Container();
}
