import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { VendorType } from '../../infrastructure/helpers/vendor_type_helper';

export class VendorResponse {
  @AutoMap()
  @ApiProperty()
  id: string;

  @AutoMap()
  @ApiProperty({ description: 'Type of the vendor Buyer/Supplier' })
  @IsEnum(VendorType)
  vendorType: VendorType;

  @AutoMap()
  @ApiProperty({
    description: 'Name of the vendor',
  })
  name: string;

  @AutoMap()
  @ApiProperty({
    description: 'Vendor email address',
  })
  email: string;

  @AutoMap()
  @ApiProperty({
    description: 'Vendor contact number',
  })
  contactNumber: string;

  @AutoMap()
  @ApiProperty({
    description: 'Vendor WhatsApp number',
  })
  whatsappNumber: string;

  @AutoMap()
  @ApiProperty({
    description: 'Vendor address',
  })
  address: string;

  @AutoMap()
  @ApiProperty({
    description: 'The user who created this vendor',
  })
  createdBy: string;

  @AutoMap()
  @ApiProperty({
    description: 'Date when the vendor was created',
  })
  createdDate: Date;

  @AutoMap()
  @ApiProperty({
    description: 'Date when the vendor was last updated',
  })
  updatedDate: Date;
}
