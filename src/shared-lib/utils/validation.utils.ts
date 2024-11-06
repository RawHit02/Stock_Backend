export class ValidationUtils {
  private constructor() {
    //
  }

  public static isUUID(text: string): boolean {
    return /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/.test(
      text,
    );
  }
}
