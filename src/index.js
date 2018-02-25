#!/usr/bin/env node

const programInfo = require('../package.json');

const getRandomNumberInRange = (min, max) => {
  // prettier-ignore
  const random = (Math.random() * (max - min)) + min;

  return Math.floor(random);
};

const parseNumberIntoArray = number => {
  const digits = number.toString(10).split('');
  return digits.map(digit => parseInt(digit, 10));
};

const getEvens = number => {
  return number[0] + number[2] + number[4] + number[6] + number[8];
};

const getOdds = number => {
  return number[1] + number[3] + number[5] + number[7];
};

const validateIdNumber = number => {
  const integerDigits = parseNumberIntoArray(number);

  const randomDigits = integerDigits.slice(0, 9);
  const validatingDigits = integerDigits.slice(9);
  const firstTenDigits = integerDigits.slice(0, 10);

  if (randomDigits[0] === 0) {
    return false;
  }

  if (validatingDigits[1] % 2 !== 0) {
    return false;
  }

  const evens = getEvens(randomDigits);
  const odds = getOdds(randomDigits);

  const tenthDigit = (evens * 7 - odds) % 10;

  if (tenthDigit !== validatingDigits[0]) {
    return false;
  }

  const eleventhDigit = firstTenDigits.reduce((total, digit) => total + digit) % 10;

  if (eleventhDigit !== validatingDigits[1]) {
    return false;
  }

  return true;
};

const generateIdNumber = () => {
  const tenDigits = getRandomNumberInRange(100000000, 999999999);

  const integerDigits = parseNumberIntoArray(tenDigits);

  const evens = getEvens(integerDigits);
  const odds = getOdds(integerDigits);

  // prettier-ignore
  const tenthDigit = ((evens * 7) - odds) % 10;

  integerDigits.push(tenthDigit);

  const eleventhDigit = integerDigits.reduce((total, digit) => total + digit) % 10;

  integerDigits.push(eleventhDigit);

  return integerDigits.join('');
};

const test = () => {
  console.log('testing');
  process.exit();
};

const help = () => {
  console.log('Help message');
  process.exit();
};

const validate = () => {
  const result = validateIdNumber(arguments[1]);

  if (result === false) {
    console.log(`${arguments[1]} geçerli bir TC kimlik numarası değil.`);
    process.exit();
  }

  console.log(`${arguments[1]} TC kimlik numarası geçerli.`);
  process.exit();
};

const generate = () => {
  console.log(generateIdNumber());
  process.exit();
};

const arguments = process.argv.slice(2);

if (arguments[0] === undefined) {
  generate();
}

const commandsForArguments = {
  '-d': validate,
  '--dogrula': validate,
  '-h': help,
  '-u': generate,
  '-t': test,
  '--test': test,
};

const toRun = commandsForArguments[arguments[0]];

if (toRun === undefined) {
  console.log('Lütfen geçerli bir komut giriniz');
  help();
}

toRun();
