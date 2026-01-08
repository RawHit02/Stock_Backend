import { RepositoryBase } from '../../infrastructure/base/repository-base';
import { VendorManagementEntity } from '../data-access/entities';
import { IVendorManagementRepository } from '../../application/interfaces/vendor-management/ivendor_management.repository';

export class VendorManagementRepository
  extends RepositoryBase<VendorManagementEntity>
  implements IVendorManagementRepository {}
