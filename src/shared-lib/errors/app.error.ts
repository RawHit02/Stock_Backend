import { BaseError } from './base.error';

export class AppError extends BaseError {
  constructor(msg: string) {
    super(msg);
  }
}
