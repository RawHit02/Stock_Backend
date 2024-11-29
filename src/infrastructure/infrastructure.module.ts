import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { IVendorManagementService } from 'src/application/interfaces/vendor-management/ivendor_management.service';
import { VendorManagementService } from './services/vendor-management/vendor_management.service';
import { JWTService } from './services/helpers';
import { DbContextModule } from './data-access/entities/dbcontext.module';
import { IVendorManagementRepository } from 'src/application/interfaces/vendor-management/ivendor_management.repository';
import { VendorManagementRepository } from './repository/vendor_management.repository';
import { IStockManagementRepository } from 'src/application/interfaces/stock-management/istock_management.repository';
import { IStockManagementService } from 'src/application/interfaces/stock-management/istock_management.service';
import { StockManagementService } from './services/stock-management/stock_management.service';
import { StockManagementRepository } from './repository/stock_management.repository';

@Module({
  imports: [HttpModule, DbContextModule],
  providers: [
    JWTService,
    {
      provide: IVendorManagementRepository,
      useClass: VendorManagementRepository,
    },
    { provide: IVendorManagementService, useClass: VendorManagementService },

    {
      provide: IStockManagementRepository,
      useClass: StockManagementRepository,
    },
    { provide: IStockManagementService, useClass: StockManagementService },

    {
      provide: IEmployeeManagementRepository,
      useClass: EmployeeManagementRepository,
    },
    { provide: ISEmployeenagementService, useClass: EmployeeManagementService },
    VendorManagementService,
    StockManagementService,
  ],
  exports: [
    JWTService,
    { provide: IVendorManagementService, useClass: VendorManagementService },
    { provide: IStockManagementService, useClass: StockManagementService },
  ],
})
export class InfrastructureModule {}
