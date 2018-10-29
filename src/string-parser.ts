import { ArraySplitter } from './array-splitter';
import { DelimiterManager } from './delimiter-manager';

export class StringParser {
  private _stringToParse: string;
  private _splitValue: string = '\n';

  constructor(private _delimiterManager = new DelimiterManager(), private _arraySplitter = ArraySplitter) {}

  public parse(stringToParse: string) {
    this._stringToParse = stringToParse;
    let stringToParseOnly = this._stringToParse;

    if(this._hasCustomDelimiters()) {
      stringToParseOnly = this._getStringValues();
      this._delimiterManager.parseDelimiters(this._getStringDelimiters());
    }

    const delimiters = this._delimiterManager.getDelimiters();
    let arrayToSplit = [].concat(stringToParseOnly);

    delimiters.forEach(currentDelimiter => {
      arrayToSplit = this._arraySplitter.splitByDelimiter(arrayToSplit, currentDelimiter);
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
