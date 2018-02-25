const idNumber = require('../src/tc-id-number');

const validIdNumber = 55682707358;
const firstInvalidIdNumber = 55682707357;
const secondInvalidIdNumber = '05682707357';

test('it generates a tc id number', () => {
  expect(idNumber.generate()).toHaveLength(11);
});

test('it validates an tc id number', () => {
  expect(idNumber.validate(validIdNumber)).toBeTruthy();
  expect(idNumber.validate(firstInvalidIdNumber)).toBeFalsy();
  expect(idNumber.validate(secondInvalidIdNumber)).toBeFalsy();
});
