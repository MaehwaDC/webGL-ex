import List from './List';

class UniqList<T> extends List<T> {
  push = (item: T): number => {
    if (item && !this.has(item)) {
      return this.push(item);
    }

    return -1;
  }
}

export default UniqList;
