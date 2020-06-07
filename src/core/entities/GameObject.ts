
abstract class GameObject {
  constructor(
    protected posX: number,
    protected posY: number,
  ) {}

  init(): void {}

  update(): void {}

  draw(): void {}
}

export default GameObject;
