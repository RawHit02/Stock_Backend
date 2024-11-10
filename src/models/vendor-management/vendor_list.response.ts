import { AutoMap } from '@automapper/classes';
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';

export class VendorListResponse {
  @AutoMap()
  @ApiProperty({ default: uuidv4() })
  id: string;

  @AutoMap()
  @ApiProperty({ default: '1' })
  amount: string;

  @AutoMap()
  @ApiProperty({ default: '' })
  vehicleId: string;

  @AutoMap()
  @ApiProperty({ default: '' })
  userId: string;

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
