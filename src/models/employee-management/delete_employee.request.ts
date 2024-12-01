import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class DeleteEmployeeRequest {
  @AutoMap()
  @ApiPropertyOptional({
    description: 'The user ID of the person performing the deletion',
    example: 'admin-user-123',
  })
  @Type(() => String)
  @IsOptional()
  deletedBy?: string;
}
