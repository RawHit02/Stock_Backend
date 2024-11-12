import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { EntityBase } from '../base/entity-base.entity';
import { AutoMap } from '@automapper/classes';

@Entity({ name: 'VendorManagementTbl' })
export class VendorManagementEntity extends EntityBase {
  // @AutoMap()
  // @Column({
  //   name: 'Amount',
  //   type: 'decimal',
  //   precision: 10,
  //   scale: 2,
  //   default: 0.0,
  // })
  // amount: number;

  @AutoMap()
  @Column({
    name: 'Name',
    type: 'character varying',
  })
  name: string;

  @AutoMap()
  @Column({
    name: 'ContactNumber',
    type: 'character varying',
    length: 15,
    default: 'N/A', // Default value instead of nullable
  })
  contactNumber: string;

  @AutoMap()
  @Column({
    name: 'WhatsappNumber',
    type: 'character varying',
    length: 15,
    default: 'N/A', 
  })
  whatsappNumber: string;

  @AutoMap()
  @Column({
    name: 'Email',
    type: 'character varying',
    length: 150,
    unique: true,
    default: 'noemail@example.com', 
  })
  email: string;

  @AutoMap()
  @Column({
    name: 'Address',
    type: 'text',
    default: 'Unknown', 
  })
  address: string;

  @AutoMap()
  @Column({
    name: 'IsDeleted',
    type: 'boolean',
    default: false,
  })
  isDeleted: boolean;

  @AutoMap()
  @Column({
    name: 'UpdatedBy',
    type: 'character varying',
    nullable: true,
  })
  updatedBy?: string;
}
