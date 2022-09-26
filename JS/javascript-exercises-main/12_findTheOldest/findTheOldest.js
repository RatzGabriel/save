const findTheOldest = function (newArr) {
  const date = new Date().getFullYear();
  let oldest = 0;
  let nameofOldest;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].yearOfDeath) {
      if (newArr[i].yearOfDeath - newArr[i].yearOfBirth > oldest) {
        oldest = newArr[i].yearOfDeath - newArr[i].yearOfBirth;
        nameofOldest = newArr[i];
      }
    }
    if (!newArr[i].yearOfDeath) {
      if (date - newArr[i].yearOfBirth > oldest) {
        oldest = date - newArr[i].yearOfBirth;
        nameofOldest = newArr[i];
      }
    }
  }
  return nameofOldest;
};

module.exports = findTheOldest;

// # Exercise 12 - Find the Oldest

// Given an array of objects representing people with a birth and death year, return the oldest person.

// ## Hints
// - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// - this can be done with a couple of chained array methods, or by using `reduce`.
// - One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ]
