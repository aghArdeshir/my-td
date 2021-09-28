const WIDTH = 800;
const HEIGHT = 600;

const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = '1px solid';

const ctx = canvas.getContext('2d');

export function draw(callback: (renderer: typeof ctx) => void) {
  callback(ctx);
}

export function clearCanvas() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

document.body.appendChild(canvas);
