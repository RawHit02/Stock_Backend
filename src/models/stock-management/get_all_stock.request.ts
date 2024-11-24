import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, Min } from 'class-validator';
import { PageOptionsDto } from '../base/dtos';
import { StockType } from 'src/infrastructure/helpers/stock_type_helper';

export class GetAllStockRequest extends PageOptionsDto {
  @ApiPropertyOptional()
  @Type(() => String)
  @IsOptional()
  readonly userId?: String;
  
  @ApiProperty({
    enum: StockType,
    default: StockType.Inward,
  })
  @IsEnum(StockType)
  @IsNotEmpty({ message: 'Stock type is required' })
  stockType: StockType.Inward;
}
