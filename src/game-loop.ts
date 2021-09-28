import { clearCanvas } from './ctx';

let drawingsCallback: () => void = () => {};

function gameLoop() {
  requestAnimationFrame(() => {
    clearCanvas();
    drawingsCallback();
    gameLoop();
  });
}

export function startGameLoop(callback: () => void) {
  drawingsCallback = callback;
  gameLoop();
}
