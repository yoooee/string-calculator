import { StringCalculator,  } from './string-calculator';
import { ArraySplitter } from './array-splitter';

describe('StringCalculator', () => {
  let stringCalculator: StringCalculator;
  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  describe('add', () => {
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

    it('returns the total of 33 when supplied with a string of "//[***]\n1***23***4***5"', () => {
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
    });

    it('should allow for many custom delimiters', () => {
      let stringToSplit = '//[a][b][c][d]\n1a2b3c4d5';
      let subject = stringCalculator.add(stringToSplit);
      let expected = 1 + 2 + 3 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('should ignore numbers larger than 1000', () => {
      let stringToSplit = '1,1001,1000,2,5000,2';
      let subject = stringCalculator.add(stringToSplit);
      let expected = 1 + 1000 + 2 + 2;
      expect(subject).toEqual(expected);
    });

    it('should throw a new error when negative numbers are in the string', () => {
      let stringToSplit = '-1,2,3,4,5';

      expect(() => {
        stringCalculator.add(stringToSplit)
      }).toThrow(new Error('negatives not allowed -1'));
    });

    it('should throw a new error when negative numbers are in the string', () => {
      let stringToSplit = '-1,-2,-3,4,5';

      expect(() => {
        stringCalculator.add(stringToSplit)
      }).toThrow(new Error('negatives not allowed -1,-2,-3'));
    });

    it('should throw a new error when negative numbers are in the string', () => {
      let stringToSplit = '1,2,3,4,-5';

      expect(() => {
        stringCalculator.add(stringToSplit)
      }).toThrow(new Error('negatives not allowed -5'));
    });
  });
});


