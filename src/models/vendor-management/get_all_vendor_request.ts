import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';
import { PageOptionsDto } from '../base/dtos';
import { VendorType } from 'src/infrastructure/helpers/vendor_type_helper';

export class GetAllVendorRequest extends PageOptionsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => String)
  readonly userId?: string;

  @ApiProperty()
  @Type(() => String)
  @IsNotEmpty()
  vendorType: VendorType;
}
