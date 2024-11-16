import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { EntityBase } from '../base/entity-base.entity';
import { AutoMap } from '@automapper/classes';
import { VendorType } from 'src/shared-lib';

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
    type: 'enum',
    enum: VendorType,
    nullable: false,  
  })
  vendorType: VendorType;

  @AutoMap()
  @Column({
    name: 'name',
    type: 'character varying',
  })
  name: string;

  @AutoMap()
  @Column({
    name: 'contactNumber',
    type: 'character varying',
    length: 15,
    nullable: false,
  })
  contactNumber: string;

  @AutoMap()
  @Column({
    name: 'whatsappNumber',
    type: 'character varying',
    length: 15,
    nullable: false,
  })
  whatsappNumber: string;

  @AutoMap()
  @Column({
    name: 'email',
    type: 'character varying',
    length: 150,
    unique: true,
    nullable: false,
  })
  email: string;

  @AutoMap()
  @Column({
    name: 'address',
    type: 'text',
    nullable: false,
  })
  address: string;

  @AutoMap()
  @Column({
    name: 'isDeleted',
    type: 'boolean',
    default: false,
  })
  isDeleted: boolean;

  @AutoMap()
  @Column({
    name: 'updatedBy',
    type: 'character varying',
    nullable: true,
  })
  updatedBy?: string;

  
}
