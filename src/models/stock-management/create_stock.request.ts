import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { StockType } from 'src/infrastructure/helpers/stock_type_helper';

export class CreateStockRequest {
  @AutoMap()
  @ApiProperty({
    enum: StockType,
    description: 'Type of stock (e.g., Inward or Outward)',
    example: StockType.Inward,
  })
  @IsNotEmpty({ message: 'Stock type is required' })
  stockType: StockType;

  @AutoMap()
  @ApiProperty({
    description: 'Transaction ID (unique identifier for the stock entry)',
    example: 'TRANS12345',
  })
  @Type(() => String)
  @IsString()
  @IsNotEmpty({ message: 'Transaction ID is required' })
  transId: string;

  @AutoMap()
  @ApiProperty({
    description: 'Description of the stock item',
    example: 'Electronic gadgets',
  })
  @Type(() => String)
  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @AutoMap()
  @ApiProperty({
    description: 'Type of item',
    example: 'Gadget',
  })
  @Type(() => String)
  @IsString()
  @Length(1, 100, { message: 'Item type must be between 1 and 100 characters' })
  @IsNotEmpty({ message: 'Item type is required' })
  itemType: string;

  @AutoMap()
  @ApiProperty({
    description: 'Quantity of the stock item',
    example: '1',
  })
  @Type(() => Number)
  @IsInt({ message: 'Quantity must be an integer' })
  @IsNotEmpty({ message: 'Quantity is required and should be a number' })
  quantity: number;

  @AutoMap()
  @ApiProperty({
    description: 'Unit price of the stock (e.g., 5000, 100.50)',
    example: '5000.00',
  })
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Unit price must be a number' })
  @IsNotEmpty({ message: 'Unit price is required' })
  unitPrice: number;

  @AutoMap()
  @ApiProperty({
    description: 'Commission percentage for the stock',
    example: '10.56',
  })
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Commission must be a number' })
  @IsNotEmpty({ message: 'Commission is required' })
  commission: number;

  @AutoMap()
  @ApiProperty({
    description: 'Total value of the stock (e.g., 10000)',
    example: '10001',
  })
  @Type(() => Number)
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Total value must be a number' },
  )
  @IsNotEmpty({ message: 'Total value is required' })
  totalValue: number;

  @AutoMap()
  @ApiProperty({
    description: 'Batch number for the stock',
    example: 'BN001',
  })
  @Type(() => String)
  @IsString()
  @Length(1, 50, {
    message: 'Batch number must be between 1 and 50 characters',
  })
  @IsNotEmpty({ message: 'Batch number is required' })
  batchNumber: string;

  @AutoMap()
  @ApiProperty({
    description: 'Person who received the stock (optional for outward stock)',
    example: 'John Doe',
  })
  @Type(() => String)
  @IsString()
  @Length(1, 100, {
    message: 'Receiver name must be between 1 and 100 characters',
  })
  @IsOptional()
  receivedBy?: string;

  @AutoMap()
  @ApiProperty({
    description: 'Location where the stock is stored',
    example: 'Warehouse 1',
  })
  @Type(() => String)
  @IsString()
  @Length(1, 100, { message: 'Location must be between 1 and 100 characters' })
  @IsNotEmpty({ message: 'Location is required' })
  location: string;

  @AutoMap()
  @ApiProperty({
    description: 'Additional notes for the stock (optional)',
    example: 'Urgent stock delivery',
  })
  @Type(() => String)
  @IsOptional()
  @IsString()
  notes?: string;

  @AutoMap()
  @ApiProperty({
    description: 'Id of the Vendor that exists',
    type: 'string',
    required: true,
    example: 'efe680c8-9ec4-429c-bfdc-804b23666469',
  })
  @Type(() => String)
  @IsNotEmpty()
  @IsString()
  vendor: string;
}
