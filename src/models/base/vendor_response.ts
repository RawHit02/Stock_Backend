import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class VendorResponse {
  @AutoMap()
  @ApiProperty()
  id: string;

  @AutoMap()
  @ApiProperty({
    description: 'Name of the vendor',
  })
  name: string;

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
