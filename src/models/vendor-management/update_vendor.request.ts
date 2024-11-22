import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  Matches,
  IsEmail,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { VendorType } from 'src/infrastructure/helpers/vendor_type_helper';

export class UpdateVendorRequest {

  @AutoMap()
  @IsOptional()
  @ApiProperty({
    description: 'Specify if the vendor is a Buyer or Supplier',
  })
  vendorType?: VendorType;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: 'Updated Vendor Name',
    description: 'Updated vendor name',
  })
  name?: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    example: '+1234567890',
    description: 'Updated vendor contact number',
  })
  @IsOptional()
  @Matches(/^\+?[1-9]\d{1,14}$/, {
    message: 'Contact number must be a valid international format',
  })
  contactNumber?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    example: '+1234567890',
    description: 'Updated vendor WhatsApp number',
  })
  @Matches(/^\+?[1-9]\d{1,14}$/, {
    message:
      'WhatsApp number must be a valid international format eg: +91 1234567890',
  })
  whatsappNumber?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    example: 'vendor@example.com',
    description: 'Updated vendor email',
  })
  @IsEmail()
  email?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    example: '123 Vendor Street',
    description: 'Updated vendor address',
  })
  address?: string;
}
