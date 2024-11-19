import { AutoMap } from '@automapper/classes';
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum } from 'class-validator';
import { VendorType } from 'src/infrastructure/helpers/vendor_type_helper';
import { StockType } from 'src/infrastructure/helpers/stock_type_helper';

export class StockListResponse {
  @AutoMap()
  @ApiProperty({ default: uuidv4() })
  id: string;

  @AutoMap()
  @ApiProperty()
  @IsEnum(StockType)
  stockType: StockType;

  @AutoMap()
  @ApiProperty()
  transId: string;

  @AutoMap()
  @ApiProperty()
  itemType: string;

  @AutoMap()
  @ApiProperty()
  quantity: string;

  @AutoMap()
  @ApiProperty()
  unitPrice: string;

  @AutoMap()
  @ApiProperty()
  commission: string;

  @AutoMap()
  @ApiProperty()
  totalValue: string;

  @AutoMap()
  @ApiProperty()
  batchNumber: string;

  @AutoMap()
  @ApiProperty()
  receivedBy: string;

  @AutoMap()
  @ApiProperty()
  location: string;

  @AutoMap()
  @ApiProperty()
  notes?: string;

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
