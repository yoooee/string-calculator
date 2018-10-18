import { MyTry  } from './index';

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

