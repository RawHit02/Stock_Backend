import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDecimal, IsInt, IsNumber, Min } from 'class-validator';

export class CreatePayoutRequest {
  @AutoMap()
  @ApiProperty({ default: '1' })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  amount: number = 1;

  @AutoMap()
  @ApiProperty({
    default: 'e78679ea-9294-4131-b220-257b58b65787',
    description: 'Vehicle id comes from vehicle Table',
  })
  vehicleId: string;

  @AutoMap()
  @ApiProperty({
    default: 'e78679ea-9294-4131-b220-257b58b65787',
    description: 'User id comes from Identity Table',
  })
  userId: string;
}
