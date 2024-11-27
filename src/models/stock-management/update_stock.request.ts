import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsEnum, IsInt, IsNumber } from 'class-validator';
import { StockType } from 'src/infrastructure/helpers/stock_type_helper';

export class UpdateStockRequest {
  @AutoMap()
  @IsOptional()
  @IsEnum(StockType)
  @ApiProperty({
    default: StockType.Inward,
    description: 'Specify if the stock type Inward or Outward',
  })
  @IsOptional()
  stockType?: StockType;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: 'Updated Description ',
    description: 'Updated Description ',
  })
  description?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: 'Updated Item Type',
    description: 'Updated Item Type',
  })
  itemType?: string;

  @AutoMap()
  @Type(() => Number)
  @IsInt({ message: 'Quantity must be an integer' })
  @IsOptional()
  @ApiProperty({
    example: '100',
    description: 'Updated Item Quantity',
  })
  quantity?: number;

  @AutoMap()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Unit price must be a number' })
  @IsOptional()
  @ApiProperty({
    default: '10.00',
    description: 'Updated Unit Price',
  })
  unitPrice?: number;

  @AutoMap()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Commission must be a number' })
  @IsOptional()
  @ApiProperty({
    default: '10.56',
    description: 'Updated Commission',
  })
  commission?: number;

  @AutoMap()
  @Type(() => Number)
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Commission must be a number' })
  @ApiProperty({
    example: '1000.99',
    description: 'Updated Total Value',
  })
  totalValue?: number;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: 'Updated Batch Bumber',
    description: 'Updated Batch Number',
  })
  batchNumber?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: 'Updated Received By',
    description: 'Updated Received By',
  })
  receivedBy?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: 'Updated location',
    description: 'Updated location',
  })
  location?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: 'Updated Notes',
    description: 'Updated Notes',
  })
  notes?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: '69e9a809-249d-4811-aacd-b27d6fec5045',
    description: 'Id of the vendor',
  })
  vendor?: string;
}
