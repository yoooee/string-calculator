import { StringParser } from './string-parser';

export class StringCalculator {

  constructor(private _stringParser = new StringParser()) {}

  add(stringToParse) {
    return this._sumAllValues(this._stringParser.parse(stringToParse));
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
