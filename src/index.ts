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
}

class StringParser {
  static parse(stringToParse) {

    const delimiterManager = new DelimiterManager();
    // We need to parse the string for delimiters and then add any we find.
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
    let arrayToAdd = StringParser.parse(stringToParse);
    return arrayToAdd.reduce((total, currentValue) => +total + +currentValue);
  }
}
