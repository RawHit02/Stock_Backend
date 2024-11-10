import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorManagementEntity } from '.';

@Module({
  imports: [TypeOrmModule.forFeature([VendorManagementEntity])],
  exports: [TypeOrmModule],
})
export class DbContextModule {}
