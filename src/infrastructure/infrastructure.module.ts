import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { IVendorManagementService } from '../application/interfaces/vendor-management/ivendor_management.service';
import { VendorManagementService } from './services/vendor-management/vendor_management.service';
import { JWTService } from './services/helpers';
import { DbContextModule } from './data-access/entities/dbcontext.module';
import { IVendorManagementRepository } from '../application/interfaces/vendor-management/ivendor_management.repository';
import { VendorManagementRepository } from './repository/vendor_management.repository';
import { IStockManagementRepository } from '../application/interfaces/stock-management/istock_management.repository';
import { IStockManagementService } from '../application/interfaces/stock-management/istock_management.service';
import { StockManagementService } from './services/stock-management/stock_management.service';
import { StockManagementRepository } from './repository/stock_management.repository';
import { IEmployeeManagementRepository } from '../application/interfaces/employee_management/iemployee_management.repository';
import { EmployeeManagementRepository } from './repository/employee_management.repository';
import { IEmployeeManagementService } from '../application/interfaces/employee_management/iemployee_management.service';
import { EmployeeManagementService } from './services/employee_management/employee_management.service';

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
    { provide: IEmployeeManagementService, useClass: EmployeeManagementService },
    VendorManagementService,
    StockManagementService
  ],
  exports: [
    JWTService,
    { provide: IVendorManagementService, useClass: VendorManagementService },
    { provide: IStockManagementService, useClass: StockManagementService },
    { provide: IEmployeeManagementService, useClass: EmployeeManagementService },

  ],
})
export class InfrastructureModule {}
