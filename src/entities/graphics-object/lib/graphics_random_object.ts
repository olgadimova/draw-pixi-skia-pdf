import { PixiGraphics } from "@/src/shared";

export function createRandomGraphicsObject() {
  const graphics = new PixiGraphics();

  const type = Math.floor(Math.random() * 3);

  const color = Math.random() * 0xffffff;

  graphics.beginFill(color);

  switch (type) {
    // rectangular
    case 0: {
      graphics.drawRect(0, 0, random(50, 200), random(50, 200));

      break;
    }

    // triangle
    case 1: {
      graphics.moveTo(0, 0);

      graphics.lineTo(random(50, 150), 0);

      graphics.lineTo(random(25, 75), random(50, 150));

      graphics.lineTo(0, 0);

      break;
    }

    // circle
    case 2: {
      graphics.drawCircle(0, 0, random(30, 100));

      break;
    }
  }

  graphics.endFill();

  // random transforms
  graphics.position.set(random(50, 400), random(50, 300));

  graphics.rotation = Math.random() * Math.PI * 2;

  graphics.scale.set(randomFloat(0.5, 2));

  return graphics;
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
