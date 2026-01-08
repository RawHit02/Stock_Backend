import { RepositoryBase } from '../../infrastructure/base/repository-base';
import { StockManagementEntity } from '../data-access/entities/stock-management/stock_management.entity';
import { IStockManagementRepository } from '../../application/interfaces/stock-management/istock_management.repository';

export class StockManagementRepository
  extends RepositoryBase<StockManagementEntity>
  implements IStockManagementRepository {}
