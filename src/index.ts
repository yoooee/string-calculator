export class MyTry {

  getTotal(stringToParse) {

    let delimiters = [',', '\n', ';'];
    let tempSplit = [].concat(stringToParse);

    // Loop throughd delimiters
    delimiters.forEach(currentDelimiter => {

      // Split each element of the array by the current delimiter
      let delimiterSplit = [];

      tempSplit.forEach(currentString => {
        let currentSplit = currentString.split(currentDelimiter);
        delimiterSplit = delimiterSplit.concat(currentSplit);
      });

      tempSplit = delimiterSplit;

    });

    return tempSplit.reduce((accumulator, current) => +accumulator + +current);
  }
}

const mytry = new MyTry();

console.log(mytry.getTotal('1,2\n7,3\n4\n8,5;6;9,7'));
