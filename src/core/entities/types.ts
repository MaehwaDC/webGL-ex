import { PIXIOptions } from '../types';
import Scene from './Scene';
import GameObject from './GameObject';

export interface ConstructorScene {
  new (opt: PIXIOptions): Scene,
}
