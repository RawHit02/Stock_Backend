import { AutoMap } from '@automapper/classes';
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { StockType } from 'src/infrastructure/helpers/stock_type_helper';
import { VendorManagementEntity } from 'src/infrastructure/data-access/entities';
import { VendorResponse } from '../base/vendor_response';

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
  quantity: number;

  @AutoMap()
  @ApiProperty()
  unitPrice: number;

  @AutoMap()
  @ApiProperty()
  commission: number;

  @AutoMap()
  @ApiProperty()
  totalValue: number;

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
  @ApiProperty({ type: () => VendorResponse })
  vendor: VendorResponse; // Add vendor details here

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
