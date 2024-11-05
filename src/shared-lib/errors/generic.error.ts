import { BaseError } from './base.error';

export namespace GenericAppError {
  export class UnexpectedError extends BaseError {
    public constructor(errMsg?: string) {
      super(errMsg);
      this.message = errMsg || `Internal server error!`;
      this.name = UnexpectedError.name;
    }
  }

  export class AlreadyExistError extends BaseError {
    public constructor(errMsg?: string) {
      super(errMsg);
      this.message = errMsg || `Record already exist!`;
      this.name = AlreadyExistError.name;
    }
  }

  export class NotFoundError extends BaseError {
    public constructor(errMsg?: string) {
      super(errMsg);
      this.message = errMsg || `Record not found!`;
      this.name = NotFoundError.name;
    }
  }

  export class ValidationError extends BaseError {
    public constructor(errMsg?: string) {
      super(errMsg);
      this.message = errMsg || 'Validation failed!';
      this.name = ValidationError.name;
    }
  }

  export class DomainError extends BaseError {
    public constructor(errMsg?: string) {
      super(errMsg);
      this.message = errMsg || '!';
      this.name = DomainError.name;
    }
  }
}
