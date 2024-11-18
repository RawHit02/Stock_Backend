import { AutoMap } from '@automapper/classes';
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum } from 'class-validator';
import { VendorType } from 'src/infrastructure/helpers/vendor_type_helper';

export class VendorListResponse {
  @AutoMap()
  @ApiProperty({ default: uuidv4() })
  id: string;

  @AutoMap()
  @ApiProperty()
  @IsEnum(VendorType)
  vendorType: VendorType;

  @AutoMap()
  @ApiProperty()
  name: string;

  @AutoMap()
  @ApiProperty()
  contactNumber: string;

  @AutoMap()
  @ApiProperty()
  whatsappNumber: string;

  @AutoMap()
  @ApiProperty()
  @IsEmail()
  email: string;

  @AutoMap()
  @ApiProperty()
  address: string;

  @AutoMap()
  @ApiProperty({ default: '' })
  createdBy?: string;

  @AutoMap()
  @ApiProperty({ default: new Date() })
  createdDate?: Date;

  @AutoMap()
  @ApiProperty({ default: new Date() })
  updatedDate?: Date;
}
