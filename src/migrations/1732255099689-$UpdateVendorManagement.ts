import { MigrationInterface, QueryRunner } from "typeorm";

export class  $UpdateVendorManagement1732255099689 implements MigrationInterface {
    name = ' $UpdateVendorManagement1732255099689'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "ItemType"`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "ReceivedBy"`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "Commission"`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "Commission" numeric(20,2) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "TotalValue"`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "TotalValue" numeric(20,2) NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "TotalValue"`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "TotalValue" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" DROP COLUMN "Commission"`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "Commission" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "ReceivedBy" character varying(100) DEFAULT 'N/A'`);
        await queryRunner.query(`ALTER TABLE "StockManagementTbl" ADD "ItemType" character varying(100) NOT NULL`);
    }

}
