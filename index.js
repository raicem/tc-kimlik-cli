#!/usr/bin/env node
// generate a valid tc kimlik no with output

let nineDigits = Math.floor(Math.random() * 100000000);

nineDigits = nineDigits.toString(10).split("");

nineDigits.unshift("1");

const integerDigits = nineDigits.map(digit => {
  return parseInt(digit);
});

console.log(integerDigits);

let evens =
  integerDigits[0] +
  integerDigits[2] +
  integerDigits[4] +
  integerDigits[6] +
  integerDigits[8];

let odds =
  integerDigits[1] + integerDigits[3] + integerDigits[5] + integerDigits[7];

tenthDigit = evens * 7 - odds;

tenthDigit = tenthDigit % 10;

integerDigits.push(tenthDigit);
console.log(integerDigits);

let eleventhDigit = integerDigits.reduce((total, digit) => {
  total = total + digit;
  return total;
});

eleventhDigit = eleventhDigit % 10;
integerDigits.push(eleventhDigit);

const idNumber = integerDigits.join("");
console.log(idNumber);
