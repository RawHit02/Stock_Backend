import { MigrationInterface, QueryRunner } from "typeorm";

export class  $VendorManagement1731441660942 implements MigrationInterface {
    name = ' $VendorManagement1731441660942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ADD "ContactNumber" character varying(15) NOT NULL DEFAULT 'N/A'`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ADD "WhatsappNumber" character varying(15) NOT NULL DEFAULT 'N/A'`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ADD "Email" character varying(150) NOT NULL DEFAULT 'noemail@example.com'`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ADD CONSTRAINT "UQ_b70ad0185f78f6aa632aab7e299" UNIQUE ("Email")`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ADD "Address" text NOT NULL DEFAULT 'Unknown'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" DROP COLUMN "Address"`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" DROP CONSTRAINT "UQ_b70ad0185f78f6aa632aab7e299"`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" DROP COLUMN "Email"`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" DROP COLUMN "WhatsappNumber"`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" DROP COLUMN "ContactNumber"`);
    }

}
