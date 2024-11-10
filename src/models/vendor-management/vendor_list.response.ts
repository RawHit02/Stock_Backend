import { AutoMap } from '@automapper/classes';
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';

export class VendorListResponse {
  @AutoMap()
  @ApiProperty({ default: uuidv4() })
  id: string;

  @AutoMap()
  @ApiProperty()
  name: string;

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
