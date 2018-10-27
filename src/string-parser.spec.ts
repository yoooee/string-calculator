import { StringParser } from './string-parser';

describe('StringParser', () => {
  let stringParser: StringParser;

  describe('parse', () => {
    beforeEach(() => {
      stringParser = new StringParser();
    });

    it('should take a string and split it based on custom delimiters', () => {
      let stringToParse = '1,2,3,4';
      let subject = stringParser.parse(stringToParse);
      let expected = ['1', '2', '3', '4'];

      expect(subject.length).toEqual(4);
      expect(subject).toEqual(expected);
    });

    it('should take a string and split it based on custom delimiters', () => {
      let stringToParse = '//;\n1;2;3;4';
      let subject = stringParser.parse(stringToParse);
      let expected = ['1', '2', '3', '4'];

      expect(subject.length).toEqual(4);
      expect(subject).toEqual(expected);
    });
  });
});
