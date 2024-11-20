export interface ITable {
  id: string;
  createdBy: string;
  createdDate: Date;
  updatedBy?: string;
  updatedDate?: Date;
  isDeleted: boolean;
}
