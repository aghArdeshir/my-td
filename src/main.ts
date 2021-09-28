import { Bullet } from './Bullet';
import { startGameLoop } from './game-loop';
import { Tower } from './Tower';

const tower = new Tower(10, 10);
const bullet = new Bullet(tower, 45);

startGameLoop(() => {
  tower.draw();
  bullet.draw();
});
