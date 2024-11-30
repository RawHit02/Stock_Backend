import { AutoMap } from '@automapper/classes';
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum } from 'class-validator';
import { EmployeeShift } from 'src/infrastructure/helpers/employee_shift_helper';

export class EmployeeListResponse {
  @AutoMap()
  @ApiProperty({ default: uuidv4() })
  id: string;

  @AutoMap()
  @ApiProperty()
  name: string;

  @AutoMap()
  @ApiProperty()
  phoneNumber: string;

  @AutoMap()
  @ApiProperty()
  @IsEmail()
  email: string;

  @AutoMap()
  @ApiProperty()
  address: string;

  @AutoMap()
  @ApiProperty()
  @IsEnum(EmployeeShift)
  employeeShift: EmployeeShift;

  @AutoMap()
  @ApiProperty({ default: '' })
  createdBy?: string;

  @AutoMap()
  @ApiProperty({ default: new Date() })
  createdDate?: Date;

  @AutoMap()
  @ApiProperty({ default: new Date() })
  updatedDate?: Date;
}
