import { AppError, BaseError } from '../errors';

interface Action<T = void> {
  (arg?: T): void;
}
interface Func<T, TResult> {
  (arg?: T): TResult;
}

export class Result<T> {
  public readonly isSuccess: boolean;
  public readonly isFailure: boolean;
  public readonly message: string;
  private readonly _error?: BaseError | string;
  private readonly _value?: T;

  private constructor(
    isSuccess: boolean,
    error?: BaseError | string,
    value?: T,
    message?: string,
  ) {
    if (isSuccess && error) {
      throw new AppError(
        'InvalidOperation: A result cannot be successful and contain an error',
      );
    }
    if (!isSuccess && !error) {
      throw new Error(
        'InvalidOperation: A failing result needs to contain an error message',
      );
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this._error = error;
    this.message = message || '';
    this._value = value;
    Object.freeze(this);
  }

  public getValue(): T | undefined {
    if (this.isSuccess) {
      return this._value;
    } else {
      throw new AppError(
        "Can't get the value of an error result. Use 'errorValue' instead.",
      );
    }
  }

  public errorValue() {
    if (this.isFailure) {
      return this._error;
    } else {
      throw new AppError(
        "Can't get the value of an success result. Use 'getValue' instead.",
      );
    }
  }

  public static ok<U>(value?: U, message?: string): Result<U> {
    return new Result<U>(true, undefined, value, message);
  }

  public static fail<U>(
    error: BaseError | string,
    message?: string,
  ): Result<U> {
    return new Result<U>(false, error, undefined, message);
  }

  public static combine(results: Result<any>[]): Result<any> {
    for (const result of results) {
      if (result.isFailure) return result;
    }
    return Result.ok();
  }

  public onSuccess(nextFunc: Func<T, Result<any>> | Action<T>) {
    if (this.isFailure) return this;
    const nextResult = nextFunc(this.getValue());
    if (nextResult) return nextResult;
    return Result.ok();
  }

  public onFailure(nextFunc: Func<BaseError | string, Result<any>>) {
    if (this.isSuccess) return this;
    const nextResult = nextFunc(this.errorValue());
    if (nextResult) return nextResult;
    return Result.ok();
  }

  public onBoth(nextAction: Action<T | BaseError | string>) {
    const value = this.isFailure ? this.errorValue() : this.getValue();
    nextAction(value);
    return this;
  }
}
