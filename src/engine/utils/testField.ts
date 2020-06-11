import _ from 'lodash';

export const test = <T>(val1: T, val2: T): boolean => val1 === val2;

export const createFinder = <T>(val1: T): (val2: T) => boolean => _.curry(test)(val1);

export const testField = <T>(obj: T, field: keyof T) => (val: T): boolean => {
  if (!_.isObjectLike(val)) { return false; }

  return test<T>(_.get(obj, field), _.get(val, field));
};
