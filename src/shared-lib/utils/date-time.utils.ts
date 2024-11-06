import { isDateString } from 'class-validator';
import moment = require('moment');

export class DateTimeUtils {
  private constructor() {
    return new DateTimeUtils();
  }

  //#region private methods
  private static isISODateTimeString(isoStringOrDate: string) {
    return isDateString(isoStringOrDate);
    // const miliSeconds = Date.parse(isoStringOrDate as string)
    // if (!Number.isNaN(miliSeconds)) {
    // 	if (new Date(miliSeconds).toISOString() !== isoStringOrDate) return false
    // }
    // return true
  }
  //#endregion

  public static toDateOnly(isoStringOrDate?: string | Date) {
    let inputDate = isoStringOrDate ? isoStringOrDate : new Date();
    if (typeof inputDate === 'string') {
      if (!DateTimeUtils.isISODateTimeString(isoStringOrDate as string))
        return null;
    }
    if (inputDate instanceof Date) {
      inputDate = `${inputDate.getFullYear()}-${(inputDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${inputDate
        .getDate()
        .toString()
        .padStart(2, '0')}T00:00:00Z`;
    }
    const date = moment.utc(inputDate, 'YYYY-MM-DD').toDate();
    if (date instanceof Date) return date;
    return null;
  }
  public static toTimeOnly(isoString: string) {
    if (!DateTimeUtils.isISODateTimeString(isoString)) return null;
    const time = moment
      .utc(`1970-01-01T${isoString.split('T')[1]}`, 'YYYY-MM-DDTHH:mm')
      .toDate();
    if (time instanceof Date) return time;
    return null;
  }
  public static toDateTime(isoStringOrDate?: string | Date) {
    let inputDateTime = isoStringOrDate ? isoStringOrDate : new Date();
    if (inputDateTime instanceof Date) {
      inputDateTime = inputDateTime.toISOString();
    } else {
      if (!DateTimeUtils.isISODateTimeString(inputDateTime)) return null;
    }
    const datetime = moment.utc(inputDateTime, 'YYYY-MM-DDTHH:mm').toDate();
    if (datetime instanceof Date) return datetime;
    return null;
  }
}
