import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { VendorManagementController } from './controllers/vendor_managenent.controller';
import { StockManagementController } from './controllers/stock_management.controller';
@Module({
  imports: [InfrastructureModule],
  controllers: [VendorManagementController, StockManagementController],
  providers: [],
  exports: [],
})
export class ApplicationModule {}
