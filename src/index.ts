export class ArraySplitter {
  constructor(private _arrayToSplit: Array<string>) {}

  splitByDelimiter(delimiter): Array<string> {
    const tempSplit = this._arrayToSplit.reduce((currentSplit, currentString) => {
      return currentSplit.concat(currentString.split(delimiter));
    }, []);

    return tempSplit;
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

    const customDelimiterFlag: string = '//';

    if (delimitersToParse.indexOf(customDelimiterFlag) >= 0) {
      //parse 
      const start = customDelimiterFlag.length;
      const end = delimitersToParse.indexOf('\n');
      const customDelimiter = delimitersToParse.slice(start, end);
      this.addDelimiter(customDelimiter);
    }
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
