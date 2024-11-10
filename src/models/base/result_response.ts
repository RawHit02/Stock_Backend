import { ExceptionHelper } from "src/application/helpers/exception.helper";


export class ResultResponse<T> {
  private readonly value: T;
  private readonly message: string;

  private constructor(
    value?: T,
    message?: string,
  ) {

    this.value = value;
    this.message = message;
    Object.freeze(this);
  }

  public static ok<T>(value: T, message: string,): ResultResponse<T> {
    return new ResultResponse<T>(value, message);
  }

}
