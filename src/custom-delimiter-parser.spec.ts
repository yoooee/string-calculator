import { CustomDelimiterParser } from './custom-delimiter-parser';

describe('CustomDelimiterParser', () => {
  describe('getDelimiters', () => {
    it('should return an array of delimiters', () => {
      const delimitersToParse = '//;';
      let customDelimiterParser = new CustomDelimiterParser(delimitersToParse);
      let subject = customDelimiterParser.getDelimiters();
      let expected = [';'];
      expect(subject.length).toEqual(1);
      expect(subject).toEqual(expected);
    });

    it('should return multiple arrays', () => {
      const delimitersToParse = '//[*][#]';
      let customDelimiterParser = new CustomDelimiterParser(delimitersToParse);
      let subject = customDelimiterParser.getDelimiters();
      let expected = ['*', '#'];
      expect(subject.length).toEqual(2);
      expect(subject).toEqual(expected);
    });

    it('should return multiple arrays', () => {
      const delimitersToParse = '//[*][#][$][-]';
      let customDelimiterParser = new CustomDelimiterParser(delimitersToParse);
      let subject = customDelimiterParser.getDelimiters();
      let expected = ['*', '#', '$', '-'];
      expect(subject.length).toEqual(4);
      expect(subject).toEqual(expected);
    });

    it('should return multiple arrays with delimiters of varying lengths', () => {
      const delimitersToParse = '//[***][#][$$$$$$$][-_-][~~]';
      let customDelimiterParser = new CustomDelimiterParser(delimitersToParse);
      let subject = customDelimiterParser.getDelimiters();
      let expected = ['***', '#', '$$$$$$$', '-_-', '~~'];
      expect(subject.length).toEqual(5);
      expect(subject).toEqual(expected);
    });
  });
});
