import { StringParser } from './string-parser';

export class StringCalculator {

  constructor() {}

  add(stringToParse) {
    const stringParser = new StringParser(stringToParse);
    return this._sumAllValues(stringParser.parse());
  }

  private _sumAllValues(arrayToSum) {
    this._checkForNegativeValues(arrayToSum);

    return arrayToSum.reduce((total, currentValue) => {
      if (currentValue > 1000)
        currentValue = 0;
      return parseFloat(total) + parseFloat(currentValue);
    }, 0);
  }

  private _checkForNegativeValues(arrayToCheck) {
    const negativeValues = arrayToCheck.filter(currentValue => currentValue < 0);

    if (negativeValues.length > 0) {
      throw new Error(`negatives not allowed ${negativeValues}`);
    }
  }
}
