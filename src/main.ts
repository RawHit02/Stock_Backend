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
      transform: true,
      whitelist: true,
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
  
  // Swagger setup
  const document = createDocument(app);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Stock Backend API',
  });

  const port = process.env.PORT || 81;
  await app.listen(port);
  console.log(`🚀 Server started at port ${port}`);
  
  return app;
}

// For Vercel deployment: export the app
export const viteNodeApp = bootstrap();

// Standard bootstrap call for local development
if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}
