import { StringParser } from './string-parser';

export class StringCalculator {
  static add(stringToParse) {
    const stringParser = new StringParser(stringToParse);
    return StringCalculator.sumAllValues(stringParser.parse());
  }

  static sumAllValues(arrayToSum) {
    const negativeValues = arrayToSum.filter(currentValue => currentValue < 0);

    if (negativeValues.length > 0) {
      throw new Error(`negatives not allowed ${negativeValues}`);
    }

    return arrayToSum.reduce((total, currentValue) => {
      if (currentValue > 1000)
        currentValue = 0;
      return parseFloat(total) + parseFloat(currentValue);
    }, 0);
  }
}
