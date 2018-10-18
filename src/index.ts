export class StringSplitter {
  static split(stringToSplit, delimiter): Array<string> {
    return stringToSplit.split(delimiter);
  }
}

export class DelimiterManager {

  private _allDelimiters: Array<string>;
  private _defaultDelimiters: Array<string> = [',', '\n'];

  constructor(userDelimiters: Array<string> = []) {
    this._allDelimiters = this._defaultDelimiters.concat(userDelimiters);
  }

  getDelimiters() {
    return this._allDelimiters;
  }
}

class StringParser {
  static parse(stringToParse) {

    let delimiters = [',', '\n', ';'];
    let arrayToSplit = [].concat(stringToParse);

    delimiters.forEach(currentDelimiter => {
      // const tempSplit = splitStringByDelimiter(currentDelimiter);
      const tempSplit = arrayToSplit.reduce((currentSplit, currentString) => {
        return currentSplit.concat(currentString.split(currentDelimiter));
      }, []);
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
