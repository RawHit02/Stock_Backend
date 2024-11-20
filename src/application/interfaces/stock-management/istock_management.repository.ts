import { IAsyncRepository } from '../base/iasync-repository';
import { StockManagementEntity } from 'src/infrastructure/data-access/entities/stock-management/stock_management.entity';

export interface IStockManagementRepository
  extends IAsyncRepository<StockManagementEntity> {}
export const IStockManagementRepository = Symbol('IStockManagementRepository');
