import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { VendorManagementController } from './controllers/vendor_managenent.controller';
import { StockManagementController } from './controllers/stock_management.controller';
import { EmployeeManagementController } from './controllers/employee_management.controller';
@Module({
  imports: [InfrastructureModule],
  controllers: [VendorManagementController, StockManagementController,EmployeeManagementController],
  providers: [],
  exports: [],
})
export class ApplicationModule {}
