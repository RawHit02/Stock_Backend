import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomMiddleware } from './common/middleware/custom_middleware';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { EnvKeyConstants } from './shared-lib';
import { JWTService } from './infrastructure/services/helpers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigModule } from './common/configuration/db/config.module';
import { TypeOrmPostgresConnectionService } from './common/configuration/db/config.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: EnvKeyConstants.JWT_SECRET,
      signOptions: { expiresIn: '30000s' }, // 5min.
      verifyOptions: {
        algorithms: ['HS256'],
        complete: true,
      },
    }),

    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      useClass: TypeOrmPostgresConnectionService,
      inject: [TypeOrmPostgresConnectionService],
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.dev.env'],
      expandVariables: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, JWTService],
  exports: [JwtModule, JWTService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomMiddleware).forRoutes('*');
  }
}
