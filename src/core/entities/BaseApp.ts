import * as PIXI from 'pixi.js';
import { PIXIOptions } from './types';

class BaseApp {
  private app: PIXI.Application;

  constructor(opt: PIXIOptions) {
    this.app = new PIXI.Application(opt);
  }
}

export default BaseApp;
