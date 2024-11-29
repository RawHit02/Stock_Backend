import { IAsyncRepository } from '../base/iasync-repository';

export interface IEmployeeManagementRepository
  extends IAsyncRepository<EmployeeManagementEntity> {}
export const IEmployeeManagementRepository = Symbol('IEmployeeManagementRepository');
