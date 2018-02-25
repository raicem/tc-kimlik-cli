const helpers = require('../src/helpers');

const idNumber = [5, 5, 6, 8, 2, 7, 0, 7, 3, 5, 8];

test('gets even numbers in tc id number', () => {
  expect(helpers.getEvens(idNumber)).toBe(5 + 6 + 2 + 0 + 3);
});

test('gets odd number from tc id number', () => {
  expect(helpers.getOdds(idNumber)).toBe(5 + 8 + 7 + 7);
});

test('it parses numbers into array as integers', () => {
  const id = 55682707358;

  expect(helpers.parseNumberIntoArray(id)).toEqual(idNumber);
});
