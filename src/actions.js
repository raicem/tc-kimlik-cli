const helpers = require('./helpers.js');

const validateIdNumber = number => {
  const integerDigits = helpers.parseNumberIntoArray(number);

  const randomDigits = integerDigits.slice(0, 9);
  const validatingDigits = integerDigits.slice(9);
  const firstTenDigits = integerDigits.slice(0, 10);

  if (randomDigits[0] === 0) {
    return false;
  }

  if (validatingDigits[1] % 2 !== 0) {
    return false;
  }

  const evens = helpers.getEvens(randomDigits);
  const odds = helpers.getOdds(randomDigits);

  // prettier-ignore
  const tenthDigit = ((evens * 7) - odds) % 10;

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
  const tenDigits = helpers.getRandomNumberInRange(100000000, 999999999);

  const integerDigits = helpers.parseNumberIntoArray(tenDigits);

  const evens = helpers.getEvens(integerDigits);
  const odds = helpers.getOdds(integerDigits);

  // prettier-ignore
  const tenthDigit = ((evens * 7) - odds) % 10;

  integerDigits.push(tenthDigit);

  const eleventhDigit = integerDigits.reduce((total, digit) => total + digit) % 10;

  integerDigits.push(eleventhDigit);

  return integerDigits.join('');
};

exports.test = () => {
  console.log('testing');
  process.exit();
};

exports.help = () => {
  console.log('Help message');
  process.exit();
};

exports.validate = () => {
  const arguments = process.argv.slice(2);

  const result = validateIdNumber(arguments[1]);

  if (result === false) {
    console.log(`${arguments[1]} geçerli bir TC kimlik numarası değil.`);
    process.exit();
  }

  console.log(`${arguments[1]} TC kimlik numarası geçerli.`);
  process.exit();
};

exports.generate = () => {
  console.log(generateIdNumber());
  process.exit();
};
