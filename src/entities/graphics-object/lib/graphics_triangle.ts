import * as PIXI from 'pixi.js-legacy';

export function createGraphicsTriangle(){
    const triangle = new PIXI.Graphics();

    triangle.beginFill(0x00ff00);
    triangle.moveTo(0,0);
    triangle.lineTo(120,0);
    triangle.lineTo(60, 120);
    triangle.lineTo(0, 0);

    triangle.endFill();
    triangle.position.set(150,100);

    return triangle;
}