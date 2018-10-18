import { MyTry, StringSplitter, DelimiterManager } from './index';

describe('MyTry', () => {

  describe('getTotal', () => {
    let mytry: MyTry;

    beforeEach(() => {

      mytry = new MyTry();
    });

    it('returns the total of 33 when supplied with a string of "1,23,4,5"', () => {
      let stringToSplit = '1,23,4,5';
      let subject = mytry.getTotal(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "1,23\n4,5"', () => {
      let stringToSplit = '1,23\n4,5';
      let subject = mytry.getTotal(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "1,23\n4;5"', () => {
      let stringToSplit = '1,23\n4;5';
      let subject = mytry.getTotal(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "1;23;4;5"', () => {
      let stringToSplit = '1;23;4;5';
      let subject = mytry.getTotal(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });

    it('returns the total of 33 when supplied with a string of "1\n23\n4\n5"', () => {
      let stringToSplit = '1\n23\n4\n5';
      let subject = mytry.getTotal(stringToSplit);
      let expected = 1 + 23 + 4 + 5;
      expect(subject).toEqual(expected);
    });
  });


});

describe('StringSplitter', () => {

  describe('split()', () => {

    it('should split a string based on the given delimiter ("-")', () => {
      const stringToSplit = '1-2-3-4-5';
      const delimiter = '-';
      const output = StringSplitter.split(stringToSplit, delimiter);
      expect(output.length).toEqual(5);
    });

    it('should split a string based on the given delimiter ("3")', () => {
      const stringToSplit = '1-2-3-4-5';
      const delimiter = '3';
      const output = StringSplitter.split(stringToSplit, delimiter);
      expect(output.length).toEqual(2);
    });

    it('should split a string based on the given delimiter (" ")', () => {
      const stringToSplit = '1 234 5';
      const delimiter = ' ';
      const output = StringSplitter.split(stringToSplit, delimiter);
      expect(output.length).toEqual(3);
    });

    it('should split a string based on the given delimiter ("")', () => {
      const stringToSplit = '12345';
      const delimiter = '';
      const output = StringSplitter.split(stringToSplit, delimiter);
      expect(output.length).toEqual(5);
    });

    it('should split a string based on the given delimiter ("%")', () => {
      const stringToSplit = '12345';
      const delimiter = '%';
      const output = StringSplitter.split(stringToSplit, delimiter);
      expect(output.length).toEqual(1);
    });
  });
});

describe('DelimiterManager', () => {
  describe('getDelimiters()', () => {
    it('should return the default delimiters of , and \n', () => {
      const delimiterManager = new DelimiterManager();
      const output = delimiterManager.getDelimiters();
      expect(output.length).toEqual(2);
      expect(output[0]).toContain(',');
      expect(output[1]).toContain('\n');
    });
  });
});
