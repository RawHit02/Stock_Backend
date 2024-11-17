import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDecimal,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  Length,
  Matches,
  Min,
} from 'class-validator';
import { VendorType } from 'src/shared-lib';

export class CreateVendorRequest {
  // @AutoMap()
  // @ApiProperty({ default: '1' })
  // @Type(() => Number)
  // @IsNumber()
  // @Min(1)
  // amount: number = 1;

  // @AutoMap()
  // @ApiProperty({
  //   default: 'e78679ea-9294-4131-b220-257b58b65787',
  //   description: 'Vehicle id comes from vehicle Table',
  // })
  // vehicleId: string;

  @AutoMap()
  @ApiProperty({ 
    enum: VendorType, 
    description: 'Specify if the vendor is a Buyer or Supplier' })
  @IsEnum(VendorType, { 
    message: 'vendorType must be either Buyer or Supplier' })
    vendorType: VendorType;

  @AutoMap()
  @Type(() => String)
  @IsNotEmpty({message: 'Name is required'})
  @ApiProperty({
    default: 'abc',
    description: 'Enter valid name',
  })
  name: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    default: '+911234567890',
    description: 'Enter contact number with country code',
  })
  @Matches(/^\+[1-9]\d{0,2} ?\d{5,12}$/, {
    message:
      'Contact number must be in international format, e.g., +91 1234567890',
  })
  @Length(10, 20)
  contactNumber: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    default: '+911234567890',
    description: 'Enter WhatsApp number with country code',
  })
  @Matches(/^\+[1-9]\d{0,2} ?\d{5,12}$/, {
    message:
      'WhatsApp number must be in international format, e.g., +91 1234567890',
  })
  @Length(10, 20)
  whatsappNumber: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    default: 'vendor@example.com',
    description: 'Enter valid email address',
  })
  @IsEmail()
  email: string;

  @AutoMap()
  @Type(() => String)
  @IsNotEmpty({message: 'Address is required'})
  @ApiProperty({
    default: '123 Main St, Anytown, AN',
    description: 'Enter valid address',
  })
  address: string;
}
