import { HttpException, HttpStatus } from '@nestjs/common';

export class ExceptionHelper {
  static BadRequest(message: string) {
    throw new HttpException({ message: message }, HttpStatus.BAD_REQUEST);
  }

  static UnAuthorizedRequest(message: string) {
    throw new HttpException({ message: message }, HttpStatus.UNAUTHORIZED);
  }

  static NotFound(message: string) {
    throw new HttpException({ message: message }, HttpStatus.NOT_FOUND);
  }
}
