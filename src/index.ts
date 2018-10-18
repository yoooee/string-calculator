
class StringParser {
  static parse(stringToParse) {

    let delimiters = [',', '\n', ';'];
    let arrayToSplit = [].concat(stringToParse);

    delimiters.forEach(currentDelimiter => {
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
