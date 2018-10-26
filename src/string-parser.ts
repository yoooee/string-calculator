import { ArraySplitter } from './array-splitter';
import { DelimiterManager } from './delimiter-manager';

export class StringParser {
  private _splitValue: string = '\n';

  constructor(private _stringToParse: string) { }

  public parse() {
    let stringToParseOnly = this._stringToParse;
    const delimiterManager = new DelimiterManager();

    if(this._hasCustomDelimiters()) {
      stringToParseOnly = this._getStringValues();
      delimiterManager.parseDelimiters(this._getStringDelimiters());
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
    let stringValues = this._stringToParse.slice(this._stringToParse.indexOf(this._splitValue), this._stringToParse.length);
    return this._removeNewLineFromStart(stringValues);
  }

  private _removeNewLineFromStart(stringToAlter) {
    return stringToAlter.slice(1, stringToAlter.length);
  }
}
