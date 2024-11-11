import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';

export class UpdateVendorRequest {
  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    default: 'e7f7b6c7-1dba-4704-836a-c5cd07b6025e',
    description: 'Vendor ID',
  })
  @IsString()
  vendorId: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    default: 'Updated Vendor Name',
    description: 'Updated vendor name',
  })
  @IsString()
  @IsOptional()
  name?: string;

  // add more fields if needed
}
