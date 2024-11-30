import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  Length,
  Matches,
} from 'class-validator';
import { EmployeeShift } from 'src/infrastructure/helpers/employee_shift_helper';

export class CreateEmployeeRequest {
 
  @AutoMap()
  @Type(() => String)
  @IsNotEmpty({ message: 'Name is required' })
  @ApiProperty({
    default: 'John Doe',
    description: 'Enter a valid name',
  })
  name: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    default: '+911234567890',
    description: 'Enter contact number with country code',
  })
  @Matches(/^\+[1-9]\d{0,2} ?\d{5,12}$/, {
    message:
      'Contact number must be in international format, e.g., +91 1234567890',
  })
  @Length(10, 20, { message: 'Contact number must be between 10 and 20 characters' })
  phoneNumber: string;

  @AutoMap()
  @Type(() => String)
  @ApiProperty({
    default: 'johndoe@example.com',
    description: 'Enter a valid email address',
  })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @AutoMap()
  @Type(() => String)
  @IsNotEmpty({ message: 'Address is required' })
  @ApiProperty({
    default: '123 Main St, Anytown, AN',
    description: 'Enter a valid address',
  })
  address: string;

  @AutoMap()
  @ApiProperty({
    enum: EmployeeShift ,
    description: 'Specify if the employee works day or night',
  })
  @IsEnum(EmployeeShift, {
    message: 'Shift must be either Day or Night',
  })
  employeeShift: EmployeeShift;

}
