import { List } from '../Lists';

class EventList extends List<string> {
  push = (item: string): number => {
    if (item && !this.has(item)) {
      return this.push(item);
    }

    return -1;
  }
}

export default EventList;
