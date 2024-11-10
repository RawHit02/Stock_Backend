import { BeforeUpdate, Column, CreateDateColumn, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ITable } from "./itable.entity";
import { AutoMap } from "@automapper/classes";

export abstract class EntityBase implements ITable {

    @AutoMap()
    @PrimaryGeneratedColumn('uuid', { name: 'Id' })
    id: string;

    @AutoMap()
    @Column( { name: "CreatedBy", length: 150, type: 'character varying'  })
    createdBy: string;

    @AutoMap()
    @CreateDateColumn({
        name: 'CreatedDate',
        type: 'timestamptz',
    })
    @Index()
    createdDate: Date;

    @AutoMap()
    @Column( { name: "UpdatedBy", length: 150, nullable: true , type: 'character varying' })
    updatedBy?: string;

    @AutoMap()
    @UpdateDateColumn({
        name: 'UpdatedDate',
        type: 'timestamptz',
        nullable: true
    })
    updatedDate?: Date;

    @AutoMap()
    @Column('boolean', { name: 'IsDeleted', default: false })
    isDeleted: boolean;
}
