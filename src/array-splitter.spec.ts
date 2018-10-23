import { ArraySplitter } from './array-splitter';

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

