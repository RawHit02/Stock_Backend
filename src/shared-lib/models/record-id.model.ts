export class RecordIdModel {
  id: string;
  constructor(init?: Partial<RecordIdModel>) {
    Object.assign(this, init);
  }
}
