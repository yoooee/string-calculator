export class ArraySplitter {

  static splitByDelimiter(arrayToSplit, delimiter): Array<string> {
      return arrayToSplit.reduce((currentSplit, currentString) => {
        return currentSplit.concat(currentString.split(delimiter));
    }, []);
  }
}
