import { DelimiterParser } from './delimiter-parser';

export class DelimiterManager {
  private _delimiters: Array<string> = [',', '\n'];

  addDelimiter(delimiter) {
    this._delimiters.push(delimiter);
  }

  getDelimiters() {
    return this._delimiters;
  }

  parseDelimiters(delimitersToParse: string) {
    const delimiterParser = new DelimiterParser(delimitersToParse);
    this._delimiters = (this._delimiters.concat(delimiterParser.getDelimiters()));
  }
}
