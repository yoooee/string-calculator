export class CustomDelimiterParser {
  private _multiDelimiterFlag = new RegExp(/^(\[.*?\])+/);
  private _customDelimiters: Array<string>;

  constructor(private _customDelimitersToParse: string) {
    this._customDelimitersToParse = _customDelimitersToParse.substr(2, _customDelimitersToParse.length);

    if (this._hasMultiDelimiters()) {
      let cleanDelimiters = this._customDelimitersToParse.slice(this._customDelimitersToParse.indexOf('[')+1, this._customDelimitersToParse.lastIndexOf(']'));
      let arrayOfCleanDelimiters = cleanDelimiters.split('][');

      this._customDelimiters = arrayOfCleanDelimiters;
    } else {
      let cleanDelimiters = this._customDelimitersToParse.charAt(0);
      this._customDelimiters = [].concat(cleanDelimiters);
    }
  }

  getDelimiters() {
    return this._customDelimiters;
  }

  private _hasMultiDelimiters() {
    return this._multiDelimiterFlag.test(this._customDelimitersToParse);
  }
}
