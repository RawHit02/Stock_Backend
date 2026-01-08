import 'reflect-metadata';
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
    console.log('Validating Environment Variables...');
    const requiredEnv = [
      'DATABASE_HOST',
      'DATABASE_USERNAME',
      'DATABASE_PASSWORD',
      'DATABASE_NAME',
    ];
    const missing = requiredEnv.filter((k) => !process.env[k]);
    if (missing.length > 0) {
      throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }

    console.log('Starting NestJS bootstrap...');
    const app = await NestFactory.create(AppModule, { cors: true });
    console.log('App created, setting up middleware...');
    
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

    console.log('Setting up Swagger...');
    const document = createDocument(app);
    SwaggerModule.setup('api', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customSiteTitle: 'Stock Backend API',
    });

    console.log('Initializing app...');
    await app.init();
    console.log('App initialized successfully.');
    cachedApp = app.getHttpAdapter().getInstance();
  }
  return cachedApp;
}

export default async (req, res) => {
  try {
    const app = await bootstrap();
    app(req, res);
  } catch (err) {
    console.error('Error during bootstrap:', err);
    res.status(500).send('Internal Server Error: ' + err.message);
  }
};
