import { MigrationInterface, QueryRunner } from "typeorm";

export class  $VendorManagement1731785277938 implements MigrationInterface {
    name = ' $VendorManagement1731785277938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "VendorManagementTbl" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "CreatedBy" character varying(150) NOT NULL, "CreatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "UpdatedBy" character varying(150), "UpdatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "IsDeleted" boolean NOT NULL DEFAULT false, "vendorType" "public"."VendorManagementTbl_vendortype_enum" NOT NULL, "name" character varying NOT NULL, "contactNumber" character varying(15) NOT NULL, "whatsappNumber" character varying(15) NOT NULL, "email" character varying(150) NOT NULL, "address" text NOT NULL, CONSTRAINT "UQ_176654708d7579abe39e3bcf6ca" UNIQUE ("email"), CONSTRAINT "PK_bbb981a23e3e3c2fb9c27b498f9" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9cd75fc06b792f19317ec16ee4" ON "VendorManagementTbl" ("CreatedDate") `);
        await queryRunner.query(`CREATE TABLE "StockManagementTbl" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "CreatedBy" character varying(150) NOT NULL, "CreatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "UpdatedBy" character varying(150), "UpdatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "IsDeleted" boolean NOT NULL DEFAULT false, "transId" character varying NOT NULL, "supplierName" character varying(150) NOT NULL, "description" text NOT NULL, "itemType" character varying(100) NOT NULL, "quantity" character varying(50) NOT NULL, "unitPrice" character varying(20) NOT NULL, "commission" numeric(5,2) NOT NULL, "totalValue" character varying NOT NULL, "batchNumber" character varying(50) NOT NULL, "receivedBy" character varying(100) NOT NULL, "location" character varying(100) NOT NULL, "notes" text DEFAULT 'N/A', CONSTRAINT "UQ_3d0852e38fa05b88071f69a1acf" UNIQUE ("transId"), CONSTRAINT "PK_75d1c30e1f5f324d4717e031d33" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_87de9ee8c98d9e551e32d13ee6" ON "StockManagementTbl" ("CreatedDate") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_87de9ee8c98d9e551e32d13ee6"`);
        await queryRunner.query(`DROP TABLE "StockManagementTbl"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9cd75fc06b792f19317ec16ee4"`);
        await queryRunner.query(`DROP TABLE "VendorManagementTbl"`);
    }

}
