import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EntityBase } from '../base/entity-base.entity'; // Import the base entity
import { AutoMap } from '@automapper/classes';
import { StockType } from '../../../../infrastructure/helpers/stock_type_helper';
import { VendorManagementEntity } from '../vendor-management/vendor_management.entity';

@Entity({ name: 'StockManagementTbl' })
export class StockManagementEntity extends EntityBase {
  @AutoMap()
  @Column({
    name: 'StockType',
    type: 'enum',
    enum: StockType,
    default: StockType.Inward,
  })
  stockType: StockType;

  @AutoMap()
  @Column({
    name: 'TransId',
    type: 'character varying',
    unique: true,
    nullable: false,
  })
  transId: string;

  @AutoMap()
  @Column({
    name: 'Description',
    type: 'text',
    nullable: false,
  })
  description: string;

  @AutoMap()
  @Column({
    name: 'ItemType',
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  itemType: string;

  @AutoMap()
  @Column({
    name: 'Quantity',
    type: 'int',
    default: 0,
  })
  quantity: number;

  @AutoMap()
  @Column({
    name: 'UnitPrice',
    type: 'decimal',
    precision: 20,
    scale: 2,
    default: 0.0,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  unitPrice: number;

  @AutoMap()
  @Column({
    name: 'Commission',
    type: 'decimal',
    precision: 20,
    scale: 2,
    default: 0.0,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  commission: number;

  @AutoMap()
  @Column({
    name: 'TotalValue',
    type: 'decimal',
    precision: 20,
    scale: 2,
    default: 0.0,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  totalValue: number;

  @AutoMap()
  @Column({
    name: 'BatchNumber',
    type: 'character varying',
    length: 50,
    nullable: false,
  })
  batchNumber: string; // Batch number (BN001)

  @AutoMap()
  @Column({
    name: 'Location',
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  location: string; // Location (Vault 1)

  @AutoMap()
  @Column({
    name: 'Notes',
    type: 'text',
    nullable: true,
    default: 'N/A',
  })
  notes?: string; // Notes (e.g., Purchased from vendor)

  @ManyToOne(() => VendorManagementEntity, (vendor) => vendor.id, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'VendorId' })
  vendor: VendorManagementEntity;
}
