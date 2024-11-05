import { uuid } from 'uuidv4';

export class IdentifierUtils {
  private static readonly DIGIT_LIMIT = 6;

  private constructor() {
    //
  }

  public static generateUUID() {
    return uuid();
  }

  public static generateId(digitLimit = IdentifierUtils.DIGIT_LIMIT) {
    return Number(Math.random().toFixed(digitLimit).slice(2));
  }
}
