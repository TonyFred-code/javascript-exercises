const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let total = 0;
  array.forEach((number) => {
    total += number;
  });

  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach((number) => {
    total *= number;
  });

  return total;
};

const power = function(number, power) {
  return Math.pow(number, power);
};

const factorial = function(number) {
  if (number === 0) return 1;
  let value = 1;

  for (let i = 1; i <= number; i++) {
    value *= i;
  }

  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
