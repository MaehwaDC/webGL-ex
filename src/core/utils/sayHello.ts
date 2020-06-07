import * as PIXI from 'pixi.js';

export default (): void => {
  let type = 'WebGL';
  if (!PIXI.utils.isWebGLSupported()) {
    type = 'canvas';
  }

  PIXI.utils.sayHello(type);
};
