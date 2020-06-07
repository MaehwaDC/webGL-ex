import _ from 'lodash';

export default (time: number, func?: () => void, log?: string): Promise<void> => (
  new Promise((res) => _.delay(() => {
    res();
    if (func) {
      func();
    }
  }, time, log))
);
