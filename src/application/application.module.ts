import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { VendorManagementController } from './controllers/vendor_managenent.controller';
@Module({
  imports: [InfrastructureModule],
  controllers: [VendorManagementController],
  providers: [],
  exports: [],
})
export class ApplicationModule {}
