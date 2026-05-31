import { CANVAS_HEIGHT, CANVAS_WIDTH, PixiGraphics } from "@/src/shared";

export function createRandomGraphicsObject() {
  const graphics = new PixiGraphics();

  const type: number = Math.floor(Math.random() * 3);

  const color: number = Math.random() * 0xffffff;

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
  graphics.position.set(random(50, CANVAS_WIDTH), random(50, CANVAS_HEIGHT));

  graphics.rotation = Math.random() * Math.PI * 2;

  graphics.scale.set(randomFloat(0.5, 2));

  return graphics;
}

// Random number from min to max value
function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Random float number from min to max value
function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
