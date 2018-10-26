import { CustomDelimiterParser } from './custom-delimiter-parser';

export class DelimiterManager {
  private _delimiters: Array<string> = [',', '\n'];

  addDelimiter(delimiter) {
    this._delimiters.push(delimiter);
  }

  getDelimiters() {
    return this._delimiters;
  }

  parseDelimiters(delimitersToParse: string) {
    const customDelimiterParser = new CustomDelimiterParser(delimitersToParse);
    this._delimiters = (this._delimiters.concat(customDelimiterParser.getDelimiters()));
  }
}
