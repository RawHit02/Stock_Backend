import { Module } from "@nestjs/common";
import { TypeOrmPostgresConnectionService } from "./config.service";

@Module({
    providers: [TypeOrmPostgresConnectionService]
})
export class PostgresConfigModule { }