import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional, Matches, IsEmail } from 'class-validator';

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

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    example: '+1234567890',
    description: 'Updated vendor contact number',
  })
  @IsString()
  @IsOptional()
  @Matches(/^\+?[1-9]\d{1,14}$/, {
    message: 'Contact number must be a valid international format',
  })
  contactNumber?: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    example: '+1234567890',
    description: 'Updated vendor WhatsApp number',
  })
  @IsString()
  @IsOptional()
  @Matches(/^\+?[1-9]\d{1,14}$/, {
    message: 'WhatsApp number must be a valid international format eg: +91 1234567890',
  })
  whatsappNumber?: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    example: 'vendor@example.com',
    description: 'Updated vendor email',
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    example: '123 Vendor Street',
    description: 'Updated vendor address',
  })
  @IsString()
  @IsOptional()
  address?: string;
}
