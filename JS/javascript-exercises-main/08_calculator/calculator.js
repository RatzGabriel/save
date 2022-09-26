const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arrayNumbers) {
  let result = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    result += arrayNumbers[i];
  }
  return result;
};

const multiply = function (arrayNumbers) {
  let result = 1;
  for (let i = 0; i < arrayNumbers.length; i++) {
    result *= arrayNumbers[i];
  }
  return result;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
