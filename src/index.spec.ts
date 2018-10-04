import { Test } from './index';

describe('Test', () => {
  let subject;

  beforeEach(() => {
    subject = new Test();
    spyOn(console, 'log');
  });

  it('displays "hi!" in the console', () => {
    subject.sayHi();
    expect(console.log).toHaveBeenCalledWith('hi!');
  });
});
