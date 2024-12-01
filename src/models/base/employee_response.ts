import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { EmployeeShift } from 'src/infrastructure/helpers/employee_shift_helper';

export class EmployeeResponse {
  @AutoMap()
  @ApiProperty()
  id: string;

  @AutoMap()
  @ApiProperty({
    description: 'Name of the employee',
  })
  name: string;

  @AutoMap()
  @ApiProperty({
    description: 'Employee email address',
  })
  email: string;

  @AutoMap()
  @ApiProperty({
    description: 'Employee contact number',
  })
  phoneNumber: string;

  @AutoMap()
  @ApiProperty({
    description: 'Employee address',
  })
  address: string;

  @AutoMap()
  @ApiProperty({ description: 'Type of the Shift Day/Night' })
  @IsEnum(EmployeeShift)
  employeeShift: EmployeeShift;

  @AutoMap()
  @ApiProperty({
    description: 'The user who created this employee',
  })
  createdBy: string;

  @AutoMap()
  @ApiProperty({
    description: 'Date when the employee was created',
  })
  createdDate: Date;

  @AutoMap()
  @ApiProperty({
    description: 'Date when the employee was last updated',
  })
  updatedDate: Date;
}
