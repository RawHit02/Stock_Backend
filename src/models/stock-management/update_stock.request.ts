import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  Matches,
  IsEmail,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { StockType } from 'src/infrastructure/helpers/stock_type_helper';

export class UpdateStockRequest {
  @AutoMap()
  @Type(() => String)
  @IsNotEmpty()
  @ApiProperty({
    default: 'e7f7b6c7-1dba-4704-836a-c5cd07b6025e',
    description: 'Stock ID',
  })
  stockId: string;

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
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    example: '100kg',
    description: 'Updated Item Quantity',
  })
  quantity?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: 'Updated Unit Price',
    description: 'Updated Unit Price',
  })
  unitPrice?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: 'Updated Commission',
    description: 'Updated Commission',
  })
  commission?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    example: '$100',
    description: 'Updated Total Value',
  })
  totalValue?: string;

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
}
