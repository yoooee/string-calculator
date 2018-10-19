import { StringCalculator, ArraySplitter, DelimiterManager } from './index';

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

    it('returns the total of 33 when supplied with a string of "1,23\n4;5"', () => {
      let stringToSplit = '1,23\n4;5';
      let subject = stringCalculator.add(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "1;23;4;5"', () => {
      let stringToSplit = '1;23;4;5';
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

describe('DelimiterManager', () => {

  let delimiterManager: DelimiterManager;
  let output;

  beforeEach(() => {
    delimiterManager = new DelimiterManager();
  });

  describe('parseDelimiters()', () => {
    it('should parse user specified delimiters from the beginning of a string', () => {
      let stringToParse = '//;\n1;2';
      delimiterManager.parseDelimiters(stringToParse);
      const subject = delimiterManager.getDelimiters();
      expect(subject.length).toEqual(3);
    });
  });

  describe('addDelimiter()', () => {
    it('should add the provided delimiter of %', () => {
      delimiterManager.addDelimiter('%');
      output = delimiterManager.getDelimiters();
      expect(output.length).toEqual(3);
      expect(output[2]).toContain('%');
    });
  });

  describe('getDelimiters()', () => {
    it('should return the default delimiters of , and \n', () => {
      output = delimiterManager.getDelimiters();
      expect(output.length).toEqual(2);
      expect(output[0]).toContain(',');
      expect(output[1]).toContain('\n');
    });
  });
});
