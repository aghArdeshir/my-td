import { Bullet } from './Bullet';
import { startGameLoop } from './game-loop';
import { Tower } from './Tower';

const tower = new Tower(10, 10);

const bullets: Bullet[] = [];

setInterval(() => {
  bullets.push(new Bullet(tower, 45));
}, 500);

startGameLoop(() => {
  tower.draw();
  bullets.forEach(bullet => bullet.draw());
});
