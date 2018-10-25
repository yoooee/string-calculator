export class DelimiterParser {
  private _multiDelimiterFlag = new RegExp(/^\[.*?\][\s]/);
  private _customDelimiters: Array<string>;

  constructor(private _delimitersToParse: string) {
    this._delimitersToParse = _delimitersToParse.substr(2, _delimitersToParse.length);

    if (this._hasMultiDelimiters()) {
      let cleanDelimiters = this._delimitersToParse.slice(this._delimitersToParse.indexOf('[')+1, this._delimitersToParse.lastIndexOf(']'));
      let arrayOfCleanDelimiters = cleanDelimiters.split('][');

      this._customDelimiters = arrayOfCleanDelimiters;
    }
  }

  getDelimiters() {
    return this._customDelimiters;
  }

  private _hasMultiDelimiters() {
    return this._multiDelimiterFlag.test(this._delimitersToParse);
  }
}
