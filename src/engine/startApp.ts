import _ from 'lodash';
import { PIXIOptions } from './types';
import sayHello from './utils/sayHello';
import GameExecutor from './modules/Executor/GameExecutor';
import { SceneOptions } from './entities/Scene';

type Options = {
  appSelector?: string,
  sceneOptions: SceneOptions,
  gameOptions: PIXIOptions,
  fps?: number
}

export default (options: Options): void | never => {
  const {
    appSelector = 'body', gameOptions = {}, sceneOptions, fps,
  } = options;
  const node = document.querySelector(appSelector);

  sayHello();
  if (_.isNil(node)) {
    throw new Error('selector not be found');
  }

  const gameEx = new GameExecutor({
    sceneOptions,
    gameOptions,
    node,
    fps,
  });

  gameEx.start();
};
