import { StringCalculator,  } from './index';
import { ArraySplitter } from './array-splitter';

describe('StringCalculator', () => {
  describe('add', () => {
    let stringCalculator: StringCalculator;

    beforeEach(() => {
      stringCalculator = new StringCalculator();
    });

    it('returns the total of 33 when supplied with a string of "1,23,4,5"', () => {
      let stringToSplit = '1,23,4,5';
      let subject = stringCalculator.add(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "1,23\n4,5"', () => {
      let stringToSplit = '1,23\n4,5';
      let subject = stringCalculator.add(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "//;\n1,23\n4;5"', () => {
      let stringToSplit = '//;\n1,23\n4;5';
      let subject = stringCalculator.add(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "//;\n1;23;4;5"', () => {
      let stringToSplit = '//;\n1;23;4;5';
      let subject = stringCalculator.add(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "1\n23\n4\n5"', () => {
      let stringToSplit = '1\n23\n4\n5';
      let subject = stringCalculator.add(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "1***23***4***5"', () => {
      let stringToSplit = '//[***]\n1***23***4***5';
      let subject = stringCalculator.add(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "//[*][%]\n1\n2*3\n4%4.5\n5%6*7,8\n9"', () => {
      let stringToSplit = '//[*][%]\n1\n2*3\n4%4.5\n5%6*7,8\n9';
      let subject = stringCalculator.add(stringToSplit);
      let expected = 1 + 2 + 3 + 4 + 4.5 + 5 + 6 + 7 + 8 + 9;
      expect(subject).toEqual(expected);
    });

    it('should not return a total when an invalid delimiter is supplied', () => {
      let stringToSplit = '//####\n1####2####3####4';
      let subject = stringCalculator.add(stringToSplit);
      let expected = NaN;
      expect(subject).toEqual(expected);
    })
  });
});

describe('ArraySplitter', () => {
  describe('splitByDelimiter()', () => {
    let arraySplitter: ArraySplitter;

    it('should split an array based on the given delimiter ("-")', () => {
      const arraySplitter: ArraySplitter = new ArraySplitter(['1-2-3-4-5']);
      const delimiter = '-';
      const output = arraySplitter.splitByDelimiter(delimiter);
      expect(output.length).toEqual(5);
    });

    it('should split an array based on the given delimiter ("3")', () => {
      const arraySplitter: ArraySplitter = new ArraySplitter(['1-2-3-4-5']);
      const delimiter = '3';
      const output = arraySplitter.splitByDelimiter(delimiter);
      expect(output.length).toEqual(2);
    });

    it('should split an array based on the given delimiter (" ")', () => {
      const arraySplitter: ArraySplitter = new ArraySplitter(['1 234 5']);
      const delimiter = ' ';
      const output = arraySplitter.splitByDelimiter(delimiter);
      expect(output.length).toEqual(3);
    });

    it('should split an array based on the given delimiter ("")', () => {
      const arraySplitter: ArraySplitter = new ArraySplitter(['12345']);
      const delimiter = '';
      const output = arraySplitter.splitByDelimiter(delimiter);
      expect(output.length).toEqual(5);
    });

    it('should split an array based on the given delimiter ("%")', () => {
      const arraySplitter: ArraySplitter = new ArraySplitter(['12345']);
      const delimiter = '%';
      const output = arraySplitter.splitByDelimiter(delimiter);
      expect(output.length).toEqual(1);
    });
  });
});

