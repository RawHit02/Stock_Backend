import { Type } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { isEmpty } from 'class-validator';
import { Result } from '../design-patterns';

export class ParseUtils {
  private constructor() {
    //
  }
  public static parseBoolean(raw: any): boolean {
    if (isEmpty(raw)) return false;
    if (raw == 1 || String(raw).toLowerCase() == 'true') return true;
    else return false;
  }
  public static parseFloat(raw: number | string): number {
    if (isEmpty(raw)) return 0.0;
    return Number(parseFloat(raw.toString()).toFixed(2));
  }
  public static parseToObject<T>(raw: string, objectType?: Type<T>): Result<T> {
    let returnData: any;
    try {
      if (objectType) {
        returnData = plainToClass(objectType, JSON.parse(raw));
      } else {
        returnData = JSON.parse(raw) as T;
      }
    } catch (err) {
      return Result.fail(err);
    }
    return Result.ok<T>(returnData);
  }
  public static parseToString(raw: any): Result<string> {
    let returnData: string;
    try {
      returnData = JSON.stringify(raw);
      return Result.ok<string>(returnData);
    } catch (err) {
      return Result.fail<string>('Failed to parse as string!');
    }
  }
  public static parsePascalToCamelCase(input: string) {
    if (input && input.length > 0) {
      return input
        .replace(input.charAt(0), input.charAt(0).toLocaleLowerCase())
        .replace('ID', 'Id');
    }
    return '';
  }
  public static parseBase64ToString(base64: string): string | null {
    return Buffer.from(base64, 'base64').toString('utf-8');
  }
  public static parseToBase64(input: string): string | null {
    return Buffer.from(input, 'utf-8').toString('base64');
  }
}
