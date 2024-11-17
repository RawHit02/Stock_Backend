import { Column, Entity } from 'typeorm';
import { EntityBase } from '../base/entity-base.entity'; // Import the base entity
import { AutoMap } from '@automapper/classes';

@Entity({ name: 'StockManagementTbl' })
export class StockManagementEntity extends EntityBase {
  @AutoMap()
  @Column({
    name: 'transId',
    type: 'character varying',
    unique: true,
    nullable: false,
  })
  transId: string;

  @AutoMap()
  @Column({
    name: 'supplierName',
    type: 'character varying',
    length: 150,
    nullable: false,
  })
  supplierName: string;

  @AutoMap()
  @Column({
    name: 'description',
    type: 'text',
    nullable: false,
  })
  description: string;

  @AutoMap()
  @Column({
    name: 'itemType',
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  itemType: string;

  @AutoMap()
  @Column({
    name: 'quantity',
    type: 'character varying',
    length: 50,
    nullable: false,
  })
  quantity: string; // Quantity (500g, 1kg)

  @AutoMap()
  @Column({
    name: 'unitPrice',
    type: 'character varying',
    length: 20, //length for symbols + numbers
    nullable: false,
  })
  unitPrice: string; // Store unit price as a string (e.g.₹5000 or $100.50)

  @AutoMap()
  @Column({
    name: 'commission',
    type: 'decimal',
    precision: 5,
    scale: 2, // Two decimal places for commission percentage
    nullable: false,
  })
  commission: number; // Commission (10%)

  @AutoMap()
  @Column({
    name: 'totalValue',
    type: 'character varying',
    nullable: false,
  })
  totalValue: string; // Total value (₹10,000,$1000)

  @AutoMap()
  @Column({
    name: 'batchNumber',
    type: 'character varying',
    length: 50,
    nullable: false,
  })
  batchNumber: string; // Batch number (BN001)

  @AutoMap()
  @Column({
    name: 'receivedBy',
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  receivedBy: string; 
  @AutoMap()
  @Column({
    name: 'location',
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  location: string; // Location (Vault 1)

  @AutoMap()
  @Column({
    name: 'notes',
    type: 'text',
    nullable: true,
    default: "N/A",
  })
  notes?: string; // Notes (e.g., Purchased from vendor)

  @AutoMap()
  @Column({
    name: 'isDeleted',
    type: 'boolean',
    default: false,
  })
  isDeleted: boolean; // Flag to mark soft deletion

  @AutoMap()
  @Column({
    name: 'updatedBy',
    type: 'character varying',
    nullable: true,
  })
  updatedBy?: string; // Track who updated the entry (optional)
}
