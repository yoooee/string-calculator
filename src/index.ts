export class StringSplitter {
  static split(stringToSplit, delimiter): Array<string> {
    return stringToSplit.split(delimiter);
  }
}

export class MyTry {

  getTotal(stringToParse) {

    let delimiters = [',', '\n', ';'];
    let tempSplit = [].concat(stringToParse);

    // Loop throughd delimiters
    delimiters.forEach(currentDelimiter => {

      const theSplit = tempSplit.reduce((accumulator, currentString) => {
        return accumulator.concat(currentString.split(currentDelimiter));
      }, []);

      tempSplit = theSplit;
    });

    return tempSplit.reduce((accumulator, current) => +accumulator + +current);
  }
}

const mytry = new MyTry();

console.log(mytry.getTotal('1,2\n7,3\n4\n8,5;6;9,7'));
