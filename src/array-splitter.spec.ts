import { ArraySplitter } from './array-splitter';

describe('ArraySplitter', () => {
  describe('splitByDelimiter()', () => {

    it('should split an array based on the given delimiter ("-")', () => {
      const arrayToSplit = ['1-2-3-4-5'];
      const delimiter = '-';
      const output = ArraySplitter.splitByDelimiter(arrayToSplit, delimiter);
      expect(output.length).toEqual(5);
    });

    it('should split an array based on the given delimiter ("3")', () => {
      const arrayToSplit = ['1-2-3-4-5'];
      const delimiter = '3';
      const output = ArraySplitter.splitByDelimiter(arrayToSplit, delimiter);
      expect(output.length).toEqual(2);
    });

    it('should split an array based on the given delimiter (" ")', () => {
      const arrayToSplit = ['1 234 5'];
      const delimiter = ' ';
      const output = ArraySplitter.splitByDelimiter(arrayToSplit, delimiter);
      expect(output.length).toEqual(3);
    });

    it('should split an array based on the given delimiter ("")', () => {
      const arrayToSplit = ['12345'];
      const delimiter = '';
      const output = ArraySplitter.splitByDelimiter(arrayToSplit, delimiter);
      expect(output.length).toEqual(5);
    });

    it('should split an array based on the given delimiter ("%")', () => {
      const arrayToSplit = ['12345'];
      const delimiter = '%';
      const output = ArraySplitter.splitByDelimiter(arrayToSplit, delimiter);
      expect(output.length).toEqual(1);
    });
  });
});

