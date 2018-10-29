export class ArraySplitter {

  static splitByDelimiter(arrayToSplit, delimiter): Array<string> {
    const tempSplit = arrayToSplit.reduce((currentSplit, currentString) => {

      return currentSplit.concat(currentString.split(delimiter));
    }, []);
    return tempSplit;
  }
}
