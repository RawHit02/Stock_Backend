import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { IVendorManagementService } from 'src/application/interfaces/vendor-management/ivendor_management.service';
import { VendorManagementService } from './services/vendor-management/vendor_management.service';
import { JWTService } from './services/helpers';

@Module({
  imports: [HttpModule],
  providers: [
    JWTService,
    { provide: IVendorManagementService, useClass: VendorManagementService },
  ],
  exports: [
    JWTService,
    { provide: IVendorManagementService, useClass: VendorManagementService },
  ],
})
export class InfrastructureModule {}
