import { StringParser } from './string-parser';

export class StringCalculator {
  static add(stringToParse) {
    const stringParser = new StringParser(stringToParse);

    return StringCalculator.sumAllValues(stringParser.parse());
  }

  static sumAllValues(arrayToSum) {
    return arrayToSum.reduce((total, currentValue) => +total + +currentValue);
  }
}
