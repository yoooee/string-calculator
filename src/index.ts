import { ArraySplitter } from './array-splitter';
import { DelimiterManager } from './delimiter-manager';


class StringParser {
  static parse(stringToParse) {

    let delimitersOnly;
    let stringToParseOnly = stringToParse;
    const delimiterManager = new DelimiterManager();

    if(stringToParse.indexOf('//') === 0) {
      delimitersOnly = stringToParse.slice(0, stringToParse.indexOf('\n')+1);
      stringToParseOnly = stringToParse.slice(stringToParse.indexOf('\n'));
      delimiterManager.parseDelimiters(delimitersOnly);
    }

    const delimiters = delimiterManager.getDelimiters();
    let arrayToSplit = [].concat(stringToParseOnly);

    delimiters.forEach(currentDelimiter => {
      const arraySplitter: ArraySplitter = new ArraySplitter(arrayToSplit);
      arrayToSplit = arraySplitter.splitByDelimiter(currentDelimiter);
    });

    return arrayToSplit;
  }
}

export class StringCalculator {
  add(stringToParse) {
    let arrayToSum = StringParser.parse(stringToParse);
    return arrayToSum.reduce((total, currentValue) => +total + +currentValue);
  }
}
