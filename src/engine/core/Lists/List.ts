import { createFinder } from '../../utils/testField';

/**
 * entity for management of list,
 * added remove, get and has methods and redefined constructor,
 * extends of base Array
 */
class List<T> extends Array<T> {
  /**
   * create new list based list
   * @param list base list
   */
  constructor(list?: T[]) {
    super(list?.length || 0);
    if (list) {
      super.concat(list);
    }
  }

  /**
   * remove element from list
   * @param item item to be deleted
   */
  public remove(item: T): void {
    const currentEventIndex = this.findIndex(createFinder<T>(item));
    this.splice(currentEventIndex, currentEventIndex);
  }

  /**
   * get item
   * @param item item
   * @param defaultVal [undefined]
   */
  public get<U = unknown>(item: T, defaultVal?: U): T | U | undefined {
    return this.find(createFinder<T>(item)) || defaultVal;
  }

  /**
   * rename includes
   */
  public has = this.includes;
}

export default List;
