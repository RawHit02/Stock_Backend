import { RepositoryBase } from 'src/infrastructure/base/repository-base';
import { VendorManagementEntity } from '../data-access/entities';
import { IVendorManagementRepository } from 'src/application/interfaces/vendor-management/ivendor_management.repository';

export class VendorManagementRepository
  extends RepositoryBase<VendorManagementEntity>
  implements IVendorManagementRepository {}
