import { createFinder } from '../../utils/testField';

class List<T> extends Array<T> {
  constructor(list?: T[]) {
    super(list?.length || 0);
    if (list) {
      super.concat(list);
    }
  }

  public remove(item: T): void {
    const currentEventIndex = this.findIndex(createFinder<T>(item));
    this.splice(currentEventIndex, currentEventIndex);
  }

  public get<U = unknown>(item: T, defaultVal?: U): T | U | undefined {
    return this.find(createFinder<T>(item)) || defaultVal;
  }

  public has = this.includes;
}

export default List;
