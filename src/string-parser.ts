import { ArraySplitter } from './array-splitter';
import { StringSplitter } from './string-splitter';
import { DelimiterManager } from './delimiter-manager';

export class StringParser {

  constructor(private _stringToParse: string) { }

  public parse() {
    let delimitersOnly;
    const splitValue = '\n';
    let stringToParseOnly = this._stringToParse;
    const delimiterManager = new DelimiterManager();

    if(this._hasCustomDelimiters()) {
      const splitString = StringSplitter.split(this._stringToParse, splitValue);
      delimitersOnly = splitString[0];
      stringToParseOnly = splitString[1];
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

  private _hasCustomDelimiters() {
    const customDelimiterFlag = new RegExp(/^\/\/.?[\s]|^\/\/\[.*?\][\s]/);
    return customDelimiterFlag.test(this._stringToParse);
  }
}
