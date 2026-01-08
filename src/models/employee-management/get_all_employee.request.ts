import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { PageOptionsDto } from '../base/dtos';
import { EmployeeShift } from '../../infrastructure/helpers/employee_shift_helper';

export class GetAllEmployeeRequest extends PageOptionsDto {

//   @ApiProperty({
//     enum: EmployeeShift,
//     default: EmployeeShift.Day,
//   })
//   @Type(() => String)
//   @IsEnum(EmployeeShift)
//   @IsNotEmpty()
//   vendorType: EmployeeShift.Day;
}
