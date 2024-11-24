import { PageDto, PageOptionsDto } from 'src/models/base/dtos';
import { VendorResponse } from 'src/models/base/vendor_response';
import { ResultResponse } from 'src/models/base/result_response';
import { VendorListResponse } from 'src/models/vendor-management/vendor_list.response';
import { GetAllStockRequest } from 'src/models/stock-management/get_all_stock.request';
import { StockListResponse } from 'src/models/stock-management/stock_list.response';
import { UpdateStockRequest } from 'src/models/stock-management/update_stock.request';
import { StockResponse } from 'src/models/base/stock_response';
import { StockManagementEntity } from 'src/infrastructure/data-access/entities/stock-management/stock_management.entity';
import { CreateStockRequest } from 'src/models/stock-management/create_stock.request';

export interface IStockManagementService {
  createStock(request: CreateStockRequest): Promise<string>;
  getStock(
    pageOptionsDto: GetAllStockRequest,
  ): Promise<ResultResponse<PageDto<StockListResponse>>>;
  deleteStock(stockId: string, deletedBy?: string): Promise<string>;
  getStockById(stockId: string): Promise<StockManagementEntity>;
  updateStock(stockId: string,request: UpdateStockRequest): Promise<StockResponse>;
}

export const IStockManagementService = Symbol('IStockManagementService');
