import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { StockType } from 'src/infrastructure/helpers/stock_type_helper';

export class StockResponse {
  @AutoMap()
  @ApiProperty()
  id: string;

  @AutoMap()
  @ApiProperty({ description: 'Type of the Stock Inward/Outward' })
  @IsEnum(StockType)
  stockType: StockType;

  @AutoMap()
  @ApiProperty({
    description: 'Supplier Name',
  })
  supplierName: string;

  @AutoMap()
  @ApiProperty({
    description: 'Description',
  })
  description: string;

  @AutoMap()
  @ApiProperty({
    description: 'Type of Item',
  })
  itemType: string;

  @AutoMap()
  @ApiProperty({
    description: 'Quantity of Item',
  })
  quantity: number;

  @AutoMap()
  @ApiProperty({
    description: 'Unit Price',
  })
  unitPrice: number;

  @AutoMap()
  @ApiProperty({
    description: 'Commision of Item',
  })
  commission: number;

  @AutoMap()
  @ApiProperty({
    description: 'Total Value of Item',
  })
  totalValue: number;

  @AutoMap()
  @ApiProperty({
    description: 'Batch Number of Item',
  })
  batchNumber: string;

  @AutoMap()
  @ApiProperty({
    description: 'Received By',
  })
  receivedBy: string;

  @AutoMap()
  @ApiProperty({
    description: 'Location of Item',
  })
  location: string;

  @AutoMap()
  @ApiProperty({
    description: 'Notes',
  })
  notes: string;

  @AutoMap()
  @ApiProperty({
    description: 'vendorId',
  })
  vendor: string;

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
