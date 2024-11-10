import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { IVendorManagementService } from 'src/application/interfaces/vendor-management/ivendor_management.service';
import { VendorManagementService } from './services/vendor-management/vendor_management.service';
import { JWTService } from './services/helpers';
import { DbContextModule } from './data-access/entities/dbcontext.module';
import { IVendorManagementRepository } from 'src/application/interfaces/vendor-management/ivendor_management.repository';
import { VendorManagementRepository } from './repository/vendor_management.repository';

@Module({
  imports: [HttpModule, DbContextModule],
  providers: [
    JWTService,
    {
      provide: IVendorManagementRepository,
      useClass: VendorManagementRepository,
    },
    { provide: IVendorManagementService, useClass: VendorManagementService },
  ],
  exports: [
    JWTService,
    { provide: IVendorManagementService, useClass: VendorManagementService },
  ],
})
export class InfrastructureModule {}
