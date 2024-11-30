import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorManagementEntity } from '.';
import { StockManagementEntity } from './stock-management/stock_management.entity';
import { EmployeeManagementEntity } from './employee-management/employee_management.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VendorManagementEntity, StockManagementEntity,EmployeeManagementEntity]),
  ],
  exports: [TypeOrmModule],
})
export class DbContextModule {}
