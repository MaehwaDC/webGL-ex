import * as PIXI from 'pixi.js';
import _ from 'lodash';
import { PIXIOptions } from './entities/types';

export default (options: PIXIOptions, appSelector = 'body'): PIXI.Application | never => {
  const node = document.querySelector(appSelector);

  if (_.isNil(node)) {
    throw new Error('selector not be found');
  }

  const app = new PIXI.Application(options);

  let type = 'WebGL';
  if (!PIXI.utils.isWebGLSupported()) {
    type = 'canvas';
  }

  PIXI.utils.sayHello(type);

  node.appendChild(app.view);

  return app;
};
