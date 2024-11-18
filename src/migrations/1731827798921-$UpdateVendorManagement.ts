import { MigrationInterface, QueryRunner } from "typeorm";

export class  $UpdateVendorManagement1731827798921 implements MigrationInterface {
    name = ' $UpdateVendorManagement1731827798921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."VendorManagementTbl_vendortype_enum" AS ENUM('Buyer', 'Supplier')`);
        await queryRunner.query(`CREATE TABLE "VendorManagementTbl" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "CreatedBy" character varying(150) NOT NULL, "CreatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "UpdatedBy" character varying(150), "UpdatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "IsDeleted" boolean NOT NULL DEFAULT false, "vendorType" "public"."VendorManagementTbl_vendortype_enum" NOT NULL DEFAULT 'Buyer', "name" character varying NOT NULL, "contactNumber" character varying(15) NOT NULL, "whatsappNumber" character varying(15) NOT NULL, "email" character varying(150) NOT NULL, "address" text NOT NULL, CONSTRAINT "UQ_176654708d7579abe39e3bcf6ca" UNIQUE ("email"), CONSTRAINT "PK_bbb981a23e3e3c2fb9c27b498f9" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9cd75fc06b792f19317ec16ee4" ON "VendorManagementTbl" ("CreatedDate") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_9cd75fc06b792f19317ec16ee4"`);
        await queryRunner.query(`DROP TABLE "VendorManagementTbl"`);
        await queryRunner.query(`DROP TYPE "public"."VendorManagementTbl_vendortype_enum"`);
    }

}
