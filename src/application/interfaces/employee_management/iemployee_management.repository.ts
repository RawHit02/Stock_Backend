import { EmployeeManagementEntity } from 'src/infrastructure/data-access/entities/employee-management/employee_management.entity';
import { IAsyncRepository } from '../base/iasync-repository';

export interface IEmployeeManagementRepository
  extends IAsyncRepository<EmployeeManagementEntity> {}
export const IEmployeeManagementRepository = Symbol('IEmployeeManagementRepository');
