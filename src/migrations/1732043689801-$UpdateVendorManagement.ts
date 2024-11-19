import { MigrationInterface, QueryRunner } from "typeorm";

export class  $UpdateVendorManagement1732043689801 implements MigrationInterface {
    name = ' $UpdateVendorManagement1732043689801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."VendorManagementTbl_vendortype_enum" AS ENUM('buyer', 'supplier')`);
        await queryRunner.query(`CREATE TABLE "VendorManagementTbl" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "CreatedBy" character varying(150) NOT NULL, "CreatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "UpdatedBy" character varying(150), "UpdatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "IsDeleted" boolean NOT NULL DEFAULT false, "VendorType" "public"."VendorManagementTbl_vendortype_enum" NOT NULL DEFAULT 'buyer', "Name" character varying NOT NULL, "ContactNumber" character varying(15) NOT NULL, "WhatsappNumber" character varying(15) NOT NULL, "Email" character varying(150) NOT NULL, "Address" text NOT NULL, CONSTRAINT "UQ_b70ad0185f78f6aa632aab7e299" UNIQUE ("Email"), CONSTRAINT "PK_bbb981a23e3e3c2fb9c27b498f9" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9cd75fc06b792f19317ec16ee4" ON "VendorManagementTbl" ("CreatedDate") `);
        await queryRunner.query(`CREATE TYPE "public"."StockManagementTbl_stocktype_enum" AS ENUM('inward', 'outward')`);
        await queryRunner.query(`CREATE TABLE "StockManagementTbl" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "CreatedBy" character varying(150) NOT NULL, "CreatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "UpdatedBy" character varying(150), "UpdatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "IsDeleted" boolean NOT NULL DEFAULT false, "StockType" "public"."StockManagementTbl_stocktype_enum" NOT NULL DEFAULT 'inward', "TransId" character varying NOT NULL, "Description" text NOT NULL, "ItemType" character varying(100) NOT NULL, "Quantity" character varying(50) NOT NULL, "UnitPrice" character varying(20) NOT NULL, "Commission" character varying NOT NULL, "TotalValue" character varying NOT NULL, "BatchNumber" character varying(50) NOT NULL, "ReceivedBy" character varying(100) DEFAULT 'N/A', "Location" character varying(100) NOT NULL, "Notes" text DEFAULT 'N/A', CONSTRAINT "UQ_602abff21b7105c5ae03f072e2f" UNIQUE ("TransId"), CONSTRAINT "PK_75d1c30e1f5f324d4717e031d33" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_87de9ee8c98d9e551e32d13ee6" ON "StockManagementTbl" ("CreatedDate") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_87de9ee8c98d9e551e32d13ee6"`);
        await queryRunner.query(`DROP TABLE "StockManagementTbl"`);
        await queryRunner.query(`DROP TYPE "public"."StockManagementTbl_stocktype_enum"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9cd75fc06b792f19317ec16ee4"`);
        await queryRunner.query(`DROP TABLE "VendorManagementTbl"`);
        await queryRunner.query(`DROP TYPE "public"."VendorManagementTbl_vendortype_enum"`);
    }

}
