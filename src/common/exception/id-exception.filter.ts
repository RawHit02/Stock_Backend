import { IdException } from "./id-exception";
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';


@Catch(IdException)
export class IdExceptionFilter implements ExceptionFilter {
    catch(exception: IdException, host: ArgumentsHost) {
        // throw new Error("Method not implemented.");
        const body = {
            message: exception.message,
            error: "Id Error"
        }
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        // const request = ctx.getRequest<Request>();
        // const status = exception.getStatus();
        // const msg = exception.message ?? 'Data Not Found';

        response.status(HttpStatus.BAD_REQUEST).json(body);

    }

}