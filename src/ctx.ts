const WIDTH = 800;
const HEIGHT = 600;

const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = '1px solid';

const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

export function draw(callback: (renderer: typeof ctx) => void) {
  callback(ctx);
}

export function clearCanvas() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

export function isCompletelyOutOfScene(
  x: number,
  y: number,
  width: number,
  height: number
) {
  return x > WIDTH || y > HEIGHT || x + width < 0 || y + height < 0;
}
