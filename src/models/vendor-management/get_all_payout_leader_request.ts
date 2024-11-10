import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDecimal, IsInt, IsNumber, IsOptional, Min } from 'class-validator';
import { PageOptionsDto } from '../base/dtos';

export class GetAllPayoutLeaderRequest {
  @AutoMap()
  @ApiPropertyOptional({
    description: 'User id comes from Identity Table',
  })
  userId: string;
  
}
