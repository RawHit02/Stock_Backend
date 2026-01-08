import { RepositoryBase } from '../../infrastructure/base/repository-base';
import { EmployeeManagementEntity } from '../data-access/entities/employee-management/employee_management.entity';
import { IEmployeeManagementRepository } from '../../application/interfaces/employee_management/iemployee_management.repository';

export class EmployeeManagementRepository
  extends RepositoryBase<EmployeeManagementEntity>
  implements IEmployeeManagementRepository {}

