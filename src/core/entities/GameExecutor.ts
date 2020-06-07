import _ from 'lodash';
import * as PIXI from 'pixi.js';
import Scene, { SceneOptions } from './Scene';
import promiseDelay from '../utils/promiseDelay';
import { PIXIOptions } from '../types';

type Props = {
  sceneOptions: SceneOptions,
  gameOptions: PIXIOptions,
  node: Element,
  fps?: number,
}

class GameExecutor {
  private scene: Scene;

  private fps: number;

  private gameOpt: PIXIOptions;

  constructor({
    sceneOptions,
    gameOptions,
    node,
    fps = 60,
  }: Props) {
    const game = new PIXI.Application(gameOptions);
    node.appendChild(game.view);

    this.scene = new Scene(sceneOptions);
    this.fps = fps;
    this.gameOpt = gameOptions;

    this.init();
  }

  async start(): Promise<void> {
    while (this.canGame) {
      // eslint-disable-next-line no-await-in-loop
      await promiseDelay(this.timeout);

      this.update();
      this.draw();
    }
  }

  init(): void {
    this.scene.init();
  }

  update(): void {
    this.scene.update();
  }

  draw(): void {
    this.scene.draw();
  }

  get canGame(): boolean {
    return !this.scene.endGame();
  }

  get timeout(): number {
    return this.fps / 1000;
  }
}

export default GameExecutor;
