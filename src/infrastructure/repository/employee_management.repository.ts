import { RepositoryBase } from 'src/infrastructure/base/repository-base';

export class EmployeeManagementRepository
  extends RepositoryBase<EmployeeManagementEntity>
  implements IEmployeeManagementRepository {}
