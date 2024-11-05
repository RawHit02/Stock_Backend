import { IDynamicProps } from './generic.types';

/**
 * This class represents the end user reponse model
 */
export class APIResponeModel<T extends IDynamicProps> {
  //#region properties
  public readonly success: boolean = false;
  public readonly message: string = '';
  public readonly data: T;
  public readonly errors: string[] = [];
  //#endregion

  constructor(init: Partial<APIResponeModel<T>>) {
    Object.assign(this, init);
  }
}
