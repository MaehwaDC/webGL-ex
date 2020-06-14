import _ from 'lodash';
import { createMapCall } from '../../utils/mapCall';
import { Executable } from './types';
import { UniqList } from '../Lists';

/** Entity for execute methods in executable objects */
class Executor<T extends Executable = Executable> {
  constructor(
    private executableObjs: UniqList<T> = new UniqList<T>(),
    private exMethods: Array<keyof T> = ['draw', 'update'],
  ) {
    this.executeFields(['init']);
  }

  protected addExObj(exObj: T): void {
    this.executableObjs.push(exObj);
  }

  public execute<TKeys extends keyof T>(fields: Array<TKeys> | [] = []): void {
    const currentFields: Array<keyof T> = [
      ...this.exMethods,
      ...fields,
    ];

    this.executeFields(currentFields);
  }

  private executeFields<TKeys extends keyof T>(fields: Array<TKeys>) {
    _.forEach<T>(
      this.executableObjs,
      createMapCall<
        T,
        TKeys
      >(fields),
    );
  }
}

export default Executor;
