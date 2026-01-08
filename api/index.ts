import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { LoggingInterceptor } from '../src/common/interceptor/logging.interceptor';
import { TransformInterceptor } from '../src/common/interceptor/transform.interceptor';
import { HttpExceptionFilter } from '../src/shared-lib';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { createDocument } from '../src/common/swagger/swagger';

let cachedApp;

async function bootstrap() {
  if (!cachedApp) {
    const app = await NestFactory.create(AppModule, { cors: true });
    
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        disableErrorMessages: false,
        exceptionFactory: (errors) => new BadRequestException(errors),
      }),
    );
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalInterceptors(
      new LoggingInterceptor(),
      new TransformInterceptor(),
    );

    app.setGlobalPrefix('api/v1');

    const document = createDocument(app);
    SwaggerModule.setup('api', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customSiteTitle: 'Stock Backend API',
    });

    await app.init();
    cachedApp = app.getHttpAdapter().getInstance();
  }
  return cachedApp;
}

export default async (req, res) => {
  const app = await bootstrap();
  app(req, res);
};
