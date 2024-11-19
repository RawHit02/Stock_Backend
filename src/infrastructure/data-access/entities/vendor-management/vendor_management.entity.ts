import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { EntityBase } from '../base/entity-base.entity';
import { AutoMap } from '@automapper/classes';
import { VendorType } from 'src/infrastructure/helpers/vendor_type_helper';

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
    name: 'VendorType',
    type: 'enum',
    enum: VendorType,
    default: VendorType.Buyer,
  })
  vendorType: VendorType;

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
    nullable: false,
  })
  contactNumber: string;

  @AutoMap()
  @Column({
    name: 'WhatsappNumber',
    type: 'character varying',
    length: 15,
    nullable: false,
  })
  whatsappNumber: string;

  @AutoMap()
  @Column({
    name: 'Email',
    type: 'character varying',
    length: 150,
    unique: true,
    nullable: false,
  })
  email: string;

  @AutoMap()
  @Column({
    name: 'Address',
    type: 'text',
    nullable: false,
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
