import { DelimiterManager } from './delimiter-manager';

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

    it('should parse user specified delimiters from the beginning of a string', () => {
      let stringToParse = '//|\n1|2';
      delimiterManager.parseDelimiters(stringToParse);
      const subject = delimiterManager.getDelimiters();
      expect(subject.length).toEqual(3);
    });

    it('should parse multiple user specified delimiters from the beginning of a string', () => {
      let stringToParse = '//[#][%]\n1#2%3';
      delimiterManager.parseDelimiters(stringToParse);
      const subject = delimiterManager.getDelimiters();
      expect(subject.length).toEqual(4);
    });

    it('should parse multiple variable length delimiters from the beginning of a string', () => {
      let stringToParse = '//[#][%%%][-][000000][22222222]\n1#2%3';
      delimiterManager.parseDelimiters(stringToParse);
      const subject = delimiterManager.getDelimiters();
      expect(subject.length).toEqual(7);
    });

    it('should parse variable length delimiter from the beginning of a string', () => {
      let stringToParse = '//[---]\n1---23';
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
