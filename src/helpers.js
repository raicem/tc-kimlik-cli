const getRandomNumberInRange = (min, max) => {
  // prettier-ignore
  const random = (Math.random() * (max - min)) + min;

  return Math.floor(random);
};

const parseNumberIntoArray = (number) => {
  const digits = number.toString(10).split('');
  return digits.map(digit => parseInt(digit, 10));
};

const getEvens = number => number[0] + number[2] + number[4] + number[6] + number[8];

const getOdds = number => number[1] + number[3] + number[5] + number[7];

module.exports = {
  getRandomNumberInRange,
  parseNumberIntoArray,
  getEvens,
  getOdds,
};
