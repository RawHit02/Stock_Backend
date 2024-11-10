import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDecimal, IsInt, IsNumber, IsOptional, Min } from 'class-validator';
import { PageOptionsDto } from '../base/dtos';

export class GetAllPayoutRequest extends PageOptionsDto {
  @ApiPropertyOptional()
  @Type(() => String)
  @IsOptional()
  readonly userId?: String;
}
