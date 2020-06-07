import { startApp } from './core';
import Car from './game/Car';

startApp({
  sceneOptions: {
    gameObjects: [Car],
  },
  gameOptions: {
    width: 500,
    height: 500,
  },
});
