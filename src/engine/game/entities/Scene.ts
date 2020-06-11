import _ from 'lodash';
import GameObject from './GameObject';
import executeField from '../utils/executeField';

interface GameObjectConstructor {
  new (): GameObject;
}

export type SceneOptions = {
  gameObjects: GameObjectConstructor[];
}

class Scene {
  protected gameObjects: GameObject[];

  constructor({
    gameObjects,
  }: SceneOptions) {
    this.gameObjects = _.map(gameObjects, (GObj: GameObjectConstructor) => new GObj());
    this.init();
  }

  init(): void {
    this.exGameFunc('init');
  }

  update(): void {
    this.exGameFunc('update');
  }

  draw(): void {
    this.exGameFunc('draw');
  }

  exGameFunc(field: keyof GameObject): void {
    _.forEach(this.gameObjects, executeField<GameObject>(field));
  }

  endGame(): boolean {
    return false;
  }
}

export default Scene;
