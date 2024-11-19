import { AutoMap } from '@automapper/classes';
import {  ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {  IsOptional, IsString } from 'class-validator';

export class DeleteStockRequest {
  @AutoMap()
  @ApiPropertyOptional({
    description: 'The user ID of the person performing the deletion',
    example: 'admin-user-123',
  })
  @Type(() => String)
  @IsOptional()
  deletedBy?: string;
}
