const fibonacci = function (num) {
  if (num < 0) return 'OOPS';
  let result = [1, 1];

  for (let i = 0; i < 26; i++) {
    result.push(result[result.length - 2] + result[result.length - 1]);
  }

  return result[num - 1];
};

fibonacci(4);

module.exports = fibonacci;

// ## Exercise 10 - Fibonacci

// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

// ```javascript
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8
// ```

// accept negatives
// accept strings
