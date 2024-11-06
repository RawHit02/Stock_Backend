
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';

/**
 * Type - @interceptor
 * @name
 * LoggingInterceptor
 * @description
 * This Interceptor class implements NestJs Inbuilt Interceptor and used to return login response
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const now = Date.now();
    const url = request.url;
    console.log(`Processing Start ${Date.now() - now}ms`, url);
    return next
      .handle()
      .pipe(
        tap(() => {
          console.log(`Processing done ${url} After... ${Date.now() - now}ms`);
        }),
      );
  }
}
