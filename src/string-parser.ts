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
      //const splitString = StringSplitter.split(this._stringToParse, splitValue);
      const splitString = [];
      splitString.push(this._stringToParse.slice(0, this._stringToParse.indexOf(splitValue)));
      splitString.push(this._stringToParse.slice(this._stringToParse.indexOf(splitValue), this._stringToParse.length));
      delimitersOnly = splitString[0];
      stringToParseOnly = splitString[1].slice(1, splitString[1].length);
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
