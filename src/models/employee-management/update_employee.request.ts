import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsOptional,
  Matches,
  IsEmail,
} from 'class-validator';
import { EmployeeShift } from 'src/infrastructure/helpers/employee_shift_helper';

export class UpdateEmployeeRequest {
  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    default: 'Updated Employee Name',
    description: 'Updated employee name',
  })
  name?: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    example: '+1234567890',
    description: 'Updated employee contact number',
  })
  @IsOptional()
  @Matches(/^\+?[1-9]\d{1,14}$/, {
    message: 'Contact number must be a valid international format',
  })
  phoneNumber?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    example: 'Employee@example.com',
    description: 'Updated Employee email',
  })
  @IsEmail()
  email?: string;

  @AutoMap()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    example: '123 employee Street',
    description: 'Updated employee address',
  })
  address?: string;

  @AutoMap()
  @IsOptional()
  @ApiProperty({
    description: 'Specify if the Employee shift - Day or Night',
    default: EmployeeShift.Day
  })
  employeeShift?: EmployeeShift;

}
