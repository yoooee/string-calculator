import { ArraySplitter } from './array-splitter';
import { StringSplitter } from './string-splitter';
import { DelimiterManager } from './delimiter-manager';

export class StringParser {
  private _splitValue: string = '\n';

  constructor(private _stringToParse: string) { }

  public parse() {
    let delimitersOnly;
    let stringToParseOnly = this._stringToParse;
    const delimiterManager = new DelimiterManager();

    if(this._hasCustomDelimiters()) {
      const splitString = [];
      // Get Delimiters
      splitString.push(this._stringToParse.slice(0, this._stringToParse.indexOf(this._splitValue)));
      splitString.push(this._stringToParse.slice(this._stringToParse.indexOf(this._splitValue), this._stringToParse.length));
      delimitersOnly = this._getDelimiters();
      stringToParseOnly = splitString[1].slice(1, splitString[1].length);
      console.log('delimters only ', delimitersOnly); // = //;
      console.log('stringto parse only', stringToParseOnly); // = 1;2;3;4;5
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

  private _hasBaseDelimiters() {
    const baseDelimiterFlag = new RegExp(/,|\\n/g);
  }

  private _getDelimiters() {
    return this._stringToParse.slice(0, this._stringToParse.indexOf(this._splitValue));
  }
}
