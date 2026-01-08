import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDecimal,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';
import { PageOptionsDto } from '../base/dtos';
import { VendorType } from '../../infrastructure/helpers/vendor_type_helper';

export class GetAllVendorRequest extends PageOptionsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => String)
  readonly userId?: string;

  @ApiProperty({
    enum: VendorType,
    default: VendorType.Buyer,
  })
  @Type(() => String)
  @IsEnum(VendorType)
  @IsNotEmpty()
  vendorType: VendorType.Buyer;
}
