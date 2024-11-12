import { MigrationInterface, QueryRunner } from "typeorm";

export class  $VendorManagement1731446754298 implements MigrationInterface {
    name = ' $VendorManagement1731446754298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ALTER COLUMN "ContactNumber" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ALTER COLUMN "WhatsappNumber" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ALTER COLUMN "Email" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ALTER COLUMN "Address" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ALTER COLUMN "Address" SET DEFAULT 'Unknown'`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ALTER COLUMN "Email" SET DEFAULT 'noemail@example.com'`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ALTER COLUMN "WhatsappNumber" SET DEFAULT 'N/A'`);
        await queryRunner.query(`ALTER TABLE "VendorManagementTbl" ALTER COLUMN "ContactNumber" SET DEFAULT 'N/A'`);
    }

}
