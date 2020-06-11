import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/ban-types
export default <T extends Object>(fields: keyof T, def = _.noop) => (obj: T): void => {
  const filed = _.get<T, typeof fields, typeof _.noop>(obj, fields, def);

  if (_.isFunction(filed)) {
    filed();
  }
};
