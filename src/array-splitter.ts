export class ArraySplitter {
  constructor(private _arrayToSplit: Array<string>) {}

  splitByDelimiter(delimiter): Array<string> {
      console.log(`------------------------------------`);
    console.log(`delimiter =  ${delimiter} `);
    const tempSplit = this._arrayToSplit.reduce((currentSplit, currentString) => {
      console.log(`arrayToSplit = ${this._arrayToSplit}`);
      console.log(`currentSplit = ${currentSplit}`);
      console.log(`currentString = ${currentString}`);
      console.log(`currentSplit.concat(curreintString.split(delimiter)) = ${currentSplit.concat(currentString.split(delimiter))}`);
      //console.log(`result = ${currentSplit.concat(currentString.split(delimiter))}`);
      console.log(`------------------------------------`);
      return currentSplit.concat(currentString.split(delimiter));
    }, []);
    return tempSplit;
  }
}
