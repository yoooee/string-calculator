export class ArraySplitter {
  constructor(private _arrayToSplit: Array<string>) {}

  splitByDelimiter(delimiter): Array<string> {
    const tempSplit = this._arrayToSplit.reduce((currentSplit, currentString) => {

      return currentSplit.concat(currentString.split(delimiter));
    }, []);
    return tempSplit;
  }
}
