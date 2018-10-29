export class CustomDelimiterParser {
  private _multiDelimiterFlag = new RegExp(/^(\[.*?\])+/);
  private _multiDelimiterFlagLeft = '[';
  private _multiDelimiterFlagRight = ']';
  private _customDelimiters: Array<string>;

  constructor(private _customDelimitersToParse: string) {
    this._customDelimitersToParse = this._removeCustomDelimiterFlag();
    let cleanDelimiters: string;

    if (this._hasMultipleDelimiters()) {
      cleanDelimiters = this._removeSuroundingBrackets();
      this._customDelimiters = this._parse(cleanDelimiters);
    } else {
      cleanDelimiters = this._removeValues();
      this._customDelimiters = [].concat(cleanDelimiters);
    }
  }

  getDelimiters() {
    return this._customDelimiters;
  }

  private _parse(delimitersToParse) {
    return delimitersToParse.split(this._multiDelimiterFlagRight + this._multiDelimiterFlagLeft);
  }

  private _hasMultipleDelimiters() {
    return this._multiDelimiterFlag.test(this._customDelimitersToParse);
  }

  private _removeSuroundingBrackets() {
    const begin = this._customDelimitersToParse.indexOf(this._multiDelimiterFlagLeft)+1;
    const end = this._customDelimitersToParse.lastIndexOf(this._multiDelimiterFlagRight);

    return this._customDelimitersToParse.slice(begin, end);
  }

  private _removeCustomDelimiterFlag() {
    return this._customDelimitersToParse = this._customDelimitersToParse.substr(2, this._customDelimitersToParse.length);
  }

  private _removeValues() {
    return this._customDelimitersToParse.charAt(0);
  }
}
