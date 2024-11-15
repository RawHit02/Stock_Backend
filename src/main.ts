import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { HttpExceptionFilter } from './shared-lib';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createDocument } from './common/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  //getting current env keys
  const appConfig = app.get(ConfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,whitelist: true,

      disableErrorMessages: false, // Enables detailed error messages
    exceptionFactory: (errors) => {
      console.error(errors); // Log validation errors
      return new BadRequestException(errors);
    },


    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );

  app.setGlobalPrefix('api/v1');
  SwaggerModule.setup('api', app, createDocument(app));
  await app.listen(process?.env?.PORT || 81);
  console.log(`🚀 Server started at ${await app.getUrl()}`);
}
bootstrap();
