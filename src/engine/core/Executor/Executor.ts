import _ from 'lodash';
import { createMapCall } from '../../utils/mapCall';
import { Executable } from './types';
import { UniqList } from '../Lists';

class Executor<T extends Executable = Executable> {
  constructor(
    private executableObjs: UniqList<T> = new UniqList<T>(),
  ) {}

  protected addExObj(exObj: T) {
    this.executableObjs.push(exObj);
  }

  public execute<TKeys extends keyof T>(fields?: [TKeys]): void {
    let currentFields: [Exclude<keyof Executable, 'init'>] = ['draw', 'update'];

    if (fields) {
      currentFields = [...currentFields, ...fields];
    }
    _.forEach<T>(
      this.executableObjs,
      createMapCall<T, Exclude<keyof T, 'init'>>(currentFields),
    );
  }
}

export default Executor;
