import { VendorManagementEntity } from 'src/infrastructure/data-access/entities';
import { IAsyncRepository } from '../base/iasync-repository';

export interface IVendorManagementRepository
  extends IAsyncRepository<VendorManagementEntity> {}
export const IVendorManagementRepository = Symbol(
  'IVendorManagementRepository',
);
