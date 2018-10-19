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

    let delimiterManager = new DelimiterManager();
    // We need to parse the string for delimiters and then add any we find.
    delimiterManager.addDelimiter(';');
    let delimiters = delimiterManager.getDelimiters();
    let arrayToSplit = [].concat(stringToParse);

    delimiters.forEach(currentDelimiter => {
     const arraySplitter: ArraySplitter = new ArraySplitter(arrayToSplit); 
      const tempSplit = arraySplitter.splitByDelimiter(currentDelimiter);
      arrayToSplit = tempSplit;
    });
    return arrayToSplit;
  }
}

export class MyTry {

  getTotal(stringToParse) {

    let arrayToSplit = StringParser.parse(stringToParse);

    return arrayToSplit.reduce((accumulator, current) => +accumulator + +current);
  }
}

const mytry = new MyTry();

console.log(mytry.getTotal('1,2\n7,3\n4\n8,5;6;9,7'));
