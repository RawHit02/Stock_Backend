import { PageDto } from '../../../models/base/dtos';
import { ResultResponse } from '../../../models/base/result_response';
import { GetAllStockRequest } from '../../../models/stock-management/get_all_stock.request';
import { StockListResponse } from '../../../models/stock-management/stock_list.response';
import { UpdateStockRequest } from '../../../models/stock-management/update_stock.request';
import { StockResponse } from '../../../models/base/stock_response';
import { StockManagementEntity } from '../../../infrastructure/data-access/entities/stock-management/stock_management.entity';
import { CreateStockRequest } from '../../../models/stock-management/create_stock.request';

export interface IStockManagementService {
  createStock(request: CreateStockRequest): Promise<string>;
  getStock(
    pageOptionsDto: GetAllStockRequest,
  ): Promise<ResultResponse<PageDto<StockListResponse>>>;
  deleteStock(stockId: string, deletedBy?: string): Promise<string>;
  getStockById(stockId: string): Promise<StockManagementEntity>;
  updateStock(
    stockId: string,
    request: UpdateStockRequest,
  ): Promise<StockResponse>;
}

export const IStockManagementService = Symbol('IStockManagementService');
