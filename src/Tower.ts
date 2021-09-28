import { draw } from './ctx';

export class Tower {
  static WIDTH = 100;
  static HEIGHT = 100;

  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public draw() {
    draw(ctx => {
      ctx.fillStyle = 'green';
      ctx.fillRect(this.x, this.y, Tower.WIDTH, Tower.HEIGHT);
    });
  }

  public getCenter() {
    return {
      x: this.x + Tower.WIDTH / 2,
      y: this.y + Tower.HEIGHT / 2,
    };
  }
}
