import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
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
    description: 'Quantity of the stock (e.g., 1kg, 500g)',
    example: '1kg',
  })
  @Type(() => String)
  @IsString()
  @Length(1, 50, { message: 'Quantity must be between 1 and 50 characters' })
  @IsNotEmpty({ message: 'Quantity is required' })
  quantity: string;

  @AutoMap()
  @ApiProperty({
    description: 'Unit price of the stock (e.g., ₹5000, $100.50)',
    example: '₹5000',
  })
  @Type(() => String)
  @IsString()
  @Length(1, 20, { message: 'Unit price must be between 1 and 20 characters' })
  @IsNotEmpty({ message: 'Unit price is required' })
  unitPrice: string;

  @AutoMap()
  @ApiProperty({
    description: 'Commission percentage for the stock',
    example: '10%',
  })
  @Type(() => String)
  @IsString()
  @IsNotEmpty({ message: 'Commission is required' })
  commission: string;

  @AutoMap()
  @ApiProperty({
    description: 'Total value of the stock (e.g., ₹10,000, $1000)',
    example: '₹10,000',
  })
  @Type(() => String)
  @IsString()
  @IsNotEmpty({ message: 'Total value is required' })
  totalValue: string;

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
    type: "string",
    required: true,
    example: "John Doe",
  })
  @Type(() => String)
  @IsNotEmpty()
  @IsString()
  vendorId: string;
}
