import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EntityBase } from '../base/entity-base.entity'; // Import the base entity
import { AutoMap } from '@automapper/classes';
import { StockType } from 'src/infrastructure/helpers/stock_type_helper';
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
    type: 'character varying',
    length: 50,
    nullable: false,
  })
  quantity: string; // Quantity (500g, 1kg)

  @AutoMap()
  @Column({
    name: 'UnitPrice',
    type: 'character varying',
    length: 20, //length for symbols + numbers
    nullable: false,
  })
  unitPrice: string; // Store unit price as a string (e.g.₹5000 or $100.50)

  @AutoMap()
  @Column({
    name: 'Commission',
    type: 'character varying',
    nullable: false,
  })
  commission: string; // Commission (10%)

  @AutoMap()
  @Column({
    name: 'TotalValue',
    type: 'character varying',
    nullable: false,
  })
  totalValue: string; // Total value (₹10,000,$1000)

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
    name: 'ReceivedBy',
    type: 'character varying',
    length: 100,
    nullable: true,
    default: 'N/A',
  })
  receivedBy?: string;

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

  @ManyToOne(() => VendorManagementEntity, (vendor) => vendor.id,{eager: true,nullable: false})
  @JoinColumn({ name: 'VendorId',  })
  vendorId: VendorManagementEntity;


}
