import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const formatMessage = (errors: []) => {
  const formattedError: any = [];
  if (errors.length > 0) {
    errors.map((el) => {
      const t = {};
      const key = 'constraints';
      const alKey = Object.keys(el['constraints'])[0];
      const msg = el[key][alKey];
      t[el['property']] = msg;
      formattedError.push(t);
    });
  }
  return formattedError;
};

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // console.log('Exception++ ', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const msg = exception.message ?? 'Data Not Found';
    const errorData = Object.create({ errors: [] });
    try {
      if (exception && typeof exception.getResponse === 'function') {
        Object.assign(errorData, exception.getResponse());
      }
    } catch (error) { }

    const body = {
      statusCode: status,
      message: msg,
      errors: errorData.message || [],
      timestamp: new Date().toISOString(),
      path: request.url,
    }

    this.writeHttpLog(body)
    response.status(status).json(body);
  }

  // File found in that location => dist\common\exception
  private async writeHttpLog(data: Record<string, any>) {
    const LOGS_DIR = join(__dirname, `${Date.now()}-log.json`)
    try {
      await writeFile(LOGS_DIR, JSON.stringify(data))
    } catch (err) {
      return;
    }
  }
}
