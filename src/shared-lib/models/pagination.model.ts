import { IDynamicProps } from './generic.types';

export class PaginationModel<T extends IDynamicProps> {
  public readonly page: number = 0;
  public readonly limit: number = 100;
  public readonly total: number;
  public readonly list: T[] = [];
  constructor(init: Partial<PaginationModel<T>>) {
    Object.assign(this, init);
  }
}
