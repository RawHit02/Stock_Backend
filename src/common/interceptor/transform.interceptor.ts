import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response as ExResponse } from 'express';

/**
 * @Type - @Interceptor
 * @name
 * Response
 * @description
 * This interface is used here to define Response type
 */
export interface Response<T> {
  data?: T;
  statusCode: number;
  message: string;
  status?: boolean;
}

/**
 * @Type - @Class
 * @name
 * TransformInterceptor
 * @description
 * This TransformInterceptor class implements NestJs Inbuilt Interceptor.
 * @returns { object } objRes
 */
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse<ExResponse>();
    const status = response.statusCode;
    let resultData;
    return next.handle().pipe(
      map((data) => {
        // console.log("SunnyINterceptorRes", data)
        if (data.value !== undefined) {
          resultData = data.value;
        } else {
          resultData = data;
        }
        //if(data?.status) response.status(data.status)
        if (data?.status) response.status(data.status);
        const objRes = {
          statusCode: data.status || status,
          // status: true,
          errors: [],
          message: data.message ? data.message : 'Success',
          data: resultData ? resultData : {},
        };
        return objRes;
      }),
    );
  }
}
