import { Executable } from '../../core/Executor/types';

abstract class GameObject implements Executable {
  constructor(
    protected posX: number,
    protected posY: number,
  ) {}

  init(): void {}

  update(): void {}

  draw(): void {}
}

export default GameObject;
