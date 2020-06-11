import _ from 'lodash';


export const mapCall = <T, TKeys extends keyof T>(obj: T, keys: [TKeys]): void => {
  _.forEach(keys, (key) => {
    const filed = obj[key];

    if (_.isFunction(filed)) {
      filed();
    }
  });
};

type CreateMapCallFunc = <T, TKeys extends keyof T>(keys: Utils.Keys<T, TKeys>) => (obj: T) => void

export const createMapCall: CreateMapCallFunc = (
  _.curryRight(mapCall)
);
