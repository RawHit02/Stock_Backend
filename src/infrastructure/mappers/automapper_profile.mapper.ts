import {
  Mapper,
  MappingProfile,
  createMap,
  extend,
  forMember,
  mapFrom,
} from '@automapper/core';
import { InjectMapper, AutomapperProfile } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateVendorRequest } from 'src/models/vendor-management/create_vendor.request';
import { VendorManagementEntity } from '../data-access/entities';
import { VendorListResponse } from 'src/models/vendor-management/vendor_list.response';
import { VendorResponse } from 'src/models/base/vendor_response';
import { UpdateVendorRequest } from 'src/models/vendor-management/update_vendor.request';
import { StockListResponse } from 'src/models/stock-management/stock_list.response';
import { StockResponse } from 'src/models/base/stock_response';
import { UpdateStockRequest } from 'src/models/stock-management/update_stock.request';
import { StockManagementEntity } from '../data-access/entities/stock-management/stock_management.entity';
import { CreateStockRequest } from 'src/models/stock-management/create_stock.request';

@Injectable()
export class AutoMapperProfileMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, CreateVendorRequest, VendorManagementEntity);
      createMap(mapper, VendorManagementEntity, VendorListResponse);
      createMap(mapper, VendorManagementEntity, VendorResponse);
      createMap(mapper, UpdateVendorRequest, VendorManagementEntity);
      createMap(mapper, CreateStockRequest, StockManagementEntity);
      createMap(mapper, StockManagementEntity, StockListResponse);
      createMap(mapper, StockManagementEntity, StockResponse);
      createMap(mapper, UpdateStockRequest, StockManagementEntity);
    };
  }
}
