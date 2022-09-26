const exercise = require('../exercise1');

describe('fizzBuzz', () => {
  it('input !== number', () => {
    expect(() => exercise.fizzBuzz('String')).toThrow();
  });
  it('input == 3', () => {
    const result = exercise.fizzBuzz(3);
    expect(result).toBe('Fizz');
  });
  it('input == 3 && 5', () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });
  it('input == 5', () => {
    const result = exercise.fizzBuzz(5);
    expect(result).toBe('Buzz');
  });
  it('input == 2', () => {
    const result = exercise.fizzBuzz(2);
    expect(result).toBe(2);
  });
});
