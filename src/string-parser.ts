import { ArraySplitter } from './array-splitter';
import { DelimiterManager } from './delimiter-manager';

export class StringParser {

  constructor(private _stringToParse: string) { }

  public parse() {
    let delimitersOnly;
    let stringToParseOnly = this._stringToParse;
    const delimiterManager = new DelimiterManager();

    // Has custom delimiters?
    if(this._hasCustomDelimiters()) {
      delimitersOnly = this._stringToParse.slice(0, this._stringToParse.indexOf('\n')+1);
      stringToParseOnly = this._stringToParse.slice(this._stringToParse.indexOf('\n'));
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
