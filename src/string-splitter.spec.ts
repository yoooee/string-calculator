import { StringSplitter } from './string-splitter';

describe('StringSplitter', () => {
  describe('split', () => {
    it('should split a string into an array based on a specified delimiter', () => {
      const splitValue = '\n';
      const stringToSplit = '//;\n1;2;3;4';
      const subject = StringSplitter.split(stringToSplit, splitValue);
      const expected = ['//;', '1;2;3;4'];
      expect(subject).toEqual(expected);
    });

    it('should split a string into an array based on a specified delimiter', () => {
      const splitValue = '\n';
      const stringToSplit = '//[*][%]\n1*2%3*4';
      const subject = StringSplitter.split(stringToSplit, splitValue);
      const expected = ['//[*][%]', '1*2%3*4'];
      expect(subject).toEqual(expected);
    });
  });
});
