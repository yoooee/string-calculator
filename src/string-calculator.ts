import { StringParser } from './string-parser';

export class StringCalculator {
  add(stringToParse) {
    let stringParser = new StringParser(stringToParse);
    let arrayToSum = stringParser.parse();
    return arrayToSum.reduce((total, currentValue) => +total + +currentValue);
  }
}
