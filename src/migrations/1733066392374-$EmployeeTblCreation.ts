import { MigrationInterface, QueryRunner } from "typeorm";

export class  $EmployeeTblCreation1733066392374 implements MigrationInterface {
    name = ' $EmployeeTblCreation1733066392374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."EmployeeTbl_shift_enum" AS ENUM('Day', 'Night')`);
        await queryRunner.query(`CREATE TABLE "EmployeeTbl" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "CreatedBy" character varying(150) NOT NULL, "CreatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "UpdatedBy" character varying(150), "UpdatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "IsDeleted" boolean NOT NULL DEFAULT false, "Name" character varying(100) NOT NULL, "Email" character varying(100) NOT NULL, "PhoneNumber" character varying(15) NOT NULL, "Address" text, "Shift" "public"."EmployeeTbl_shift_enum" NOT NULL DEFAULT 'Day', CONSTRAINT "UQ_d5814e26f5255e290e9b9b9f117" UNIQUE ("Email"), CONSTRAINT "UQ_a2658829c8fa84caf010c3192a0" UNIQUE ("PhoneNumber"), CONSTRAINT "PK_99f547f2a95d9712ce47665f260" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_836a0ac470cf0c0ef1886a44db" ON "EmployeeTbl" ("CreatedDate") `);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "ItemType" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "Quantity"`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "Quantity" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "UnitPrice"`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "UnitPrice" numeric(20,2) NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "UnitPrice"`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "UnitPrice" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "Quantity"`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "Quantity" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "ItemType"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_836a0ac470cf0c0ef1886a44db"`);
        await queryRunner.query(`DROP TABLE "EmployeeTbl"`);
        await queryRunner.query(`DROP TYPE "public"."EmployeeTbl_shift_enum"`);
    }

}
