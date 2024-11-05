import { ExceptionFilter, HttpException, HttpStatus, ArgumentsHost, Catch } from '@nestjs/common';
import { APIResponeModel } from '../models';

/**
 * This class will catch all the http exceptions and prepare response for that exception
 */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    //Getting passed status code otherwise returning standard internal server error
    const status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorData = Object.create({ errors: [] });
    try {
      if (exception && typeof exception.getResponse === 'function') {
        Object.assign(errorData, exception.getResponse());
      }
    } catch (error) {}

    //Response model
    const responseModel = new APIResponeModel({
      success: false,
      message: status === HttpStatus.INTERNAL_SERVER_ERROR ? 'Internal server error!' : exception.message,
      errors: errorData.errors || [],
    });
    response.status(status).json(responseModel);
  }
}
