
export class DelimiterParser {
  private _singleDelimiterFlag = new RegExp(/^\/\/.?[\s]/);
  private _multiDelimiterFlag = new RegExp(/^\/\/\[.*?\][\s]/);
  private _customDelimiterFlag = new RegExp(/^\/\/.?[\s]|^\/\/\[.*?\][\s]/);
  private _customDelimiters: Array<string> = [];

  constructor(private _delimitersToParse: string) {

    if (this._hasSingleDelimiter()) {
      let delimiters = this._singleDelimiterFlag.exec(_delimitersToParse)[0];
      this._customDelimiters = [].concat(delimiters.slice(2, 3));
    }

    if (this._hasMultiDelimiters()) {
      let delimiters = this._multiDelimiterFlag.exec(_delimitersToParse)[0];
      let delimitersOnly = delimiters.slice(delimiters.indexOf('[')+1, delimiters.lastIndexOf(']'));
      let arrayOfDelimiters = delimitersOnly.split('][');
      this._customDelimiters = arrayOfDelimiters;
    }
  }

  getDelimiters() {
    return this._customDelimiters;
  }

  private _hasCustomDelimiters() {
    return this._customDelimiterFlag.test(this._delimitersToParse);
  }

  private _hasSingleDelimiter() {
    return this._singleDelimiterFlag.test(this._delimitersToParse);
  }

  private _hasMultiDelimiters() {
    return this._multiDelimiterFlag.test(this._delimitersToParse);
  }
}

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
