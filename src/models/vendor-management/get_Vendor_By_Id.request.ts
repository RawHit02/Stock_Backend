import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class GetVendorByIdRequest {
  @AutoMap()
  @ApiProperty({
    default: 'e78679ea-9294-4131-b220-257b58b65787',
    description: 'The ID of the vendor to retrieve',
    example: '53b86133-3b0b-480b-882a-a4318638db1e',
  })
  @Type(() => String)
  readonly vendorId: string;
}
