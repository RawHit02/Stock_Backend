export abstract class BaseError extends Error {
  public id?: string;
  public dateTime = new Date();
  public errorCode?: number;
}
