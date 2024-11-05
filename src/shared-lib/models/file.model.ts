import { IDynamicProps } from './generic.types';

export class FileModel {
  public readonly id: string;
  public readonly name: string;
  public readonly buffer: Buffer;
  public readonly mimeType: string;
  public readonly size: number;
  public readonly encoding: string;
  public readonly createdOn: Date;
  public readonly modifiedOn: Date;
  public readonly metaData?: IDynamicProps;

  constructor(init: Partial<FileModel>) {
    Object.assign(this, init);
  }
}
