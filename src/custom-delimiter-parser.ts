export class CustomDelimiterParser {
  private _multiDelimiterFlag = new RegExp(/^(\[.*?\])+/);
  private _customDelimiters: Array<string>;

  constructor(private _customDelimitersToParse: string) {
    this._customDelimitersToParse = this._removeCustomDelimiterFlag();
    let cleanDelimiters: string;

    if (this._hasMultipleDelimiters()) {
      cleanDelimiters = this._removeSuroundingBrackets();
      const arrayOfCleanDelimiters = cleanDelimiters.split('][');
      this._customDelimiters = arrayOfCleanDelimiters;
    } else {
      cleanDelimiters = this._removeValues();
      this._customDelimiters = [].concat(cleanDelimiters);
    }
  }

  getDelimiters() {
    return this._customDelimiters;
  }

  private _hasMultipleDelimiters() {
    return this._multiDelimiterFlag.test(this._customDelimitersToParse);
  }

  private _removeSuroundingBrackets() {
    return this._customDelimitersToParse.slice(this._customDelimitersToParse.indexOf('[')+1, this._customDelimitersToParse.lastIndexOf(']'));
  }

  private _removeCustomDelimiterFlag() {
    return this._customDelimitersToParse = this._customDelimitersToParse.substr(2, this._customDelimitersToParse.length);
  }

  private _removeValues() {
    return this._customDelimitersToParse.charAt(0);
  }
}
