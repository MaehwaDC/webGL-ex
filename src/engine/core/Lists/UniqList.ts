import List from './List';

/**
 * entity based List,
 * add surface checking for push and constructor methods
 */
class UniqList<T> extends List<T> {
  constructor(list: T[] = []) {
    super(Array.from(new Set(list)));
  }

  /**
   * push item with surface checking
   * @param item item to be pushed
   * @returns index or -1 if item has been list
   */
  push = (item: T): number => {
    if (item && !this.has(item)) {
      return this.push(item);
    }

    return -1;
  }
}

export default UniqList;
