import { draw } from './ctx';
import { Tower } from './Tower';
import { degreeToRadians } from './utils';

export class Bullet {
  static WIDTH = 10;
  static HEIGHT = 10;
  static SPEED = 5;

  private x: number;
  private y: number;

  constructor(tower: Tower, degrees: number) {
    const { x, y } = tower.getCenter();
    this.x = x - Bullet.WIDTH / 2;
    this.y = y - Bullet.HEIGHT / 2;

    const radian = degreeToRadians(degrees);

    setInterval(() => {
      this.x += Bullet.SPEED * Math.cos(radian);
      this.y += Bullet.SPEED * Math.sin(radian);
    }, 1);
  }

  public draw() {
    draw(ctx => {
      ctx.fillStyle = 'black';
      ctx.fillRect(this.x, this.y, Bullet.WIDTH, Bullet.HEIGHT);
    });
  }
}
