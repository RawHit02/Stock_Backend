import { MigrationInterface, QueryRunner } from "typeorm";

export class  $VendorManagement1731258181094 implements MigrationInterface {
    name = ' $VendorManagement1731258181094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "VendorManagementTbl" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "CreatedBy" character varying(150) NOT NULL, "CreatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "UpdatedBy" character varying(150), "UpdatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "IsDeleted" boolean NOT NULL DEFAULT false, "Name" character varying NOT NULL, CONSTRAINT "PK_bbb981a23e3e3c2fb9c27b498f9" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9cd75fc06b792f19317ec16ee4" ON "VendorManagementTbl" ("CreatedDate") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_9cd75fc06b792f19317ec16ee4"`);
        await queryRunner.query(`DROP TABLE "VendorManagementTbl"`);
    }

}
