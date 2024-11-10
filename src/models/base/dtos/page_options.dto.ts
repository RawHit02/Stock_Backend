import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
// import { Order } from 'src/models/constants/order.constant';

export class PageOptionsDto {
  // @ApiPropertyOptional({ enum: Order, default: Order.DESC })
  // @IsEnum(Order)
  // @IsOptional()
  // readonly order?: Order = Order.DESC;

  @ApiPropertyOptional()
  @Type(() => String)
  @IsOptional()
  readonly orderBy?: string;

  @ApiPropertyOptional()
  @Type(() => String)
  @IsOptional()
  readonly search?: string;

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1;

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 10000,
    default: 10,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(10000)
  @IsOptional()
  readonly take?: number = 10;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
