import { createFinder } from '../../utils/testField';

class List<T> {
  constructor(
    protected readonly list: T[] = [],
  ) {}

  public remove(item: T): void {
    const currentEventIndex = this.list.findIndex(createFinder<T>(item));
    this.list.splice(currentEventIndex, currentEventIndex);
  }

  public get<U = unknown>(item: T, defaultVal?: U): T | U | undefined {
    return this.list.find(createFinder<T>(item)) || defaultVal;
  }

  public has = this.list.includes;

  public push = this.list.push;

  public pop = this.list.pop;

  public shift = this.list.shift;

  public unshift = this.list.unshift
}

export default List;
