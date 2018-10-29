import { StringParser } from './string-parser';

export class StringCalculator {

  private _VALUE_MAX = 1000;
  private _arrayToParse: Array<string>;
  private _arrayToSum: Array<number>;

  constructor(private _stringParser = new StringParser()) {}

  add(stringToParse) {
    this._arrayToParse = this._stringParser.parse(stringToParse);
    return this._sumAllValues();
  }

  private _sumAllValues() {
    this._checkForNegativeValues();
    this._replaceValuesLargerThan1000();

    return this._arrayToSum.reduce((total, currentValue) => {
      return +total + +currentValue;
    }, 0);
  }

  private _checkForNegativeValues() {
    const negativeValues = this._arrayToParse.filter(currentValue => +currentValue < 0);

    if (negativeValues.length > 0) {
      throw new Error(`negatives not allowed ${negativeValues}`);
    }
  }

  private _replaceValuesLargerThan1000() {
    this._arrayToSum = this._arrayToParse.map((currentValue) => {
      return +currentValue > this._VALUE_MAX ? 0 : +currentValue;
    });
  }
}
