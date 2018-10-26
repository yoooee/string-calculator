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
      delimitersOnly = this._getStringDelimiters();
      stringToParseOnly = this._getStringValues();
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

  private _getStringDelimiters() {
    return this._stringToParse.slice(0, this._stringToParse.indexOf(this._splitValue));
  }

  private _getStringValues() {
    let stuff = this._stringToParse.slice(this._stringToParse.indexOf(this._splitValue), this._stringToParse.length);
    return stuff.slice(1, stuff.length);
  }
}
