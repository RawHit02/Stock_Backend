import { Column, Entity } from 'typeorm';
import { EntityBase } from '../base/entity-base.entity'; // Import the base entity
import { AutoMap } from '@automapper/classes';
import { EmployeeType } from 'src/infrastructure/helpers/employee_type_helper';

@Entity({ name: 'EmployeeTbl' })
export class EmployeeEntity extends EntityBase {
  @AutoMap()
  @Column({
    name: 'Name',
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  name: string;

  @AutoMap()
  @Column({
    name: 'Email',
    type: 'character varying',
    length: 100,
    nullable: false,
    unique: true, // Ensure email is unique
  })
  email: string;

  @AutoMap()
  @Column({
    name: 'PhoneNumber',
    type: 'character varying',
    length: 15,
    nullable: false,
    unique: true, // Ensure phone number is unique
  })
  phoneNumber: string;

  @AutoMap()
  @Column({
    name: 'Address',
    type: 'text',
    nullable: true,
  })
  address: string;

  @AutoMap()
  @Column({
    name: 'Shift',
    type: 'enum',
    enum: EmployeeType,
    default: EmployeeType.Day,
  })
  shift: EmployeeType
}
