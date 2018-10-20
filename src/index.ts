export class ArraySplitter {
  constructor(private _arrayToSplit: Array<string>) {}

  splitByDelimiter(delimiter): Array<string> {
    const tempSplit = this._arrayToSplit.reduce((currentSplit, currentString) => {
      return currentSplit.concat(currentString.split(delimiter));
    }, []);

    return tempSplit;
  }
}

export class DelimiterParser {
  private _customDelimiterFlag: string = '//';
  private _customDelimiter: string;

  constructor(private _delimitersToParse: string) {

    if (this._hasCustomDelimiters()) {
      const start = this._customDelimiterFlag.length;
      const end = _delimitersToParse.indexOf('\n');
      this._customDelimiter = _delimitersToParse.slice(start, end);
    }
  }

  getDelimiter() {
    return this._customDelimiter;
  }

  private _hasCustomDelimiters() {
    return this._delimitersToParse.indexOf(this._customDelimiterFlag) >= 0;
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
    this._delimiters.push(delimiterParser.getDelimiter());
  }
}

class StringParser {
  static parse(stringToParse) {

    const delimiterManager = new DelimiterManager();
    // delimiterManager.parseDelimiters();
    delimiterManager.addDelimiter(';');
    const delimiters = delimiterManager.getDelimiters();
    let arrayToSplit = [].concat(stringToParse);

    delimiters.forEach(currentDelimiter => {
      const arraySplitter: ArraySplitter = new ArraySplitter(arrayToSplit);
      arrayToSplit = arraySplitter.splitByDelimiter(currentDelimiter);
    });

    return arrayToSplit;
  }
}

export class StringCalculator {
  add(stringToParse) {
    let arrayToSum = StringParser.parse(stringToParse);
    return arrayToSum.reduce((total, currentValue) => +total + +currentValue);
  }
}
