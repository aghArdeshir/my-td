import { draw, isCompletelyOutOfScene } from './ctx';
import { Tower } from './Tower';
import { degreeToRadians } from './utils';

export class Bullet {
  static WIDTH = 10;
  static HEIGHT = 10;
  static SPEED = 5;

  private x: number;
  private y: number;
  private intervalRef: NodeJS.Timer;

  constructor(tower: Tower, degrees: number) {
    const { x, y } = tower.getCenter();
    this.x = x - Bullet.WIDTH / 2;
    this.y = y - Bullet.HEIGHT / 2;

    const radian = degreeToRadians(degrees);

    this.intervalRef = setInterval(() => {
      if (isCompletelyOutOfScene(this.x, this.y, Bullet.WIDTH, Bullet.HEIGHT)) {
        this.destroy();
      }

      this.x += Bullet.SPEED * Math.cos(radian);
      this.y += Bullet.SPEED * Math.sin(radian);
    }, 1);
  }

  private destroy() {
    clearInterval(this.intervalRef);
  }

  public draw() {
    draw(ctx => {
      ctx.fillStyle = 'black';
      ctx.fillRect(this.x, this.y, Bullet.WIDTH, Bullet.HEIGHT);
    });
  }
}
