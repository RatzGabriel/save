'use strict';

// Array functions

// first_.first(array, [n]) Aliases: head, take

// Returns the first element of an array. Passing n will
// return the first n elements of the array.

// _.first([5, 4, 3, 2, 1]);
// => 5

// 1) Interpret the Prompt
// Returns the first element of an array
// Passing n will
// return the first n elements of the array.

// 2) I: array, number
//    O: either first element,or n elements
//    C:
//    E: empty array,n>array.length, n<1

// 3) Write Tests
//    first([5,4,3,2,1]) =>5

// 4) High Level Strategy
//    1.
//    a)get first element and return it
//    b)get n elements from array and return them as array
//

//    2.
//    declare a result array
//    iterate array n times and push all to result array || return first elemen

// 5) Pseudocode the Strategy
//    a. return first element
//    b. iterate through array n times
//          do thing 1
//      return result array || element

// 6) Implement the Solution

function first(array, n) {
  if (array.length === 0) return 'Error , array is empty!';
  if (!n) return array[0];
  if (n < 0 || n > array.length) return 'Error, n is under 0 or to big!';

  return array.slice(0, n);
}

// console.log(first([5, 4, 3, 2, 1]));
// console.log(first([5, 4, 3, 2, 1], 3));
// console.log(first([5, 4, 3, 2, 1], 10));

// ------------------------------------------------------------------------------------

// first_.last(array, [n])

// Returns the last element of an array. Passing n will
// return the last n elements of the array.

// _.last([5, 4, 3, 2, 1]);
// => 1

// 1) Interpret the Prompt
// Returns the last element of an array
// Passing n will
// return the last n elements of the array.

// 2) I: array, number
//    O: either last element,or n elements from the end
//    C:
//    E: empty array,n>array.length, n<1

// 3) Write Tests
//    last([5,4,3,2,1]) =>1

// 4) High Level Strategy
//    1.
//    a)get last element and return it
//    b)get n elements from array end and return them as array
//

//    2.
//    declare a result array
//    iterate array n times and push all to result array || return last element

// 5) Pseudocode the Strategy
//    a. return last element
//    b. iterate through array from the end n times
//          do thing 1
//      return result array || element

// 6) Implement the Solution

function last(array, n) {
  if (array.length === 0) return 'Error , array is empty!';
  if (!n) return array[array.length - 1];
  if (n < 0 || n > array.length) return 'Error, n is under 0 or to big!';

  return array.slice(array.length - n, array.length);
}

// console.log(last([5, 4, 3, 2, 1]));
// console.log(last([5, 4, 3, 2, 1], 3));
// console.log(last([5, 4, 3, 2, 1], 10));

// ------------------------------------------------------------------------------------

// each_.each

// Iterates over a list of elements, yielding each in turn to an iteratee function.
// The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is
// called with three arguments: (element, index, list).
// If list is a JavaScript object, iteratee's arguments will
// be (value, key, list). Returns the list for chaining.

// _.each([1, 2, 3], alert);
// => alerts each number in turn...
// _.each({one: 1, two: 2, three: 3}, alert);
// => alerts each number value in turn...
// Note: Collection functions work on arrays, objects, and array-like objects
// such as arguments, NodeList and similar.
// But it works by duck-typing, so avoid passing objects with a numeric length property.
//  It's also good to note that an each loop cannot be broken out of — to break, use _.find instead.

// 1) Interpret the Prompt
//    1.Iterate a list of elements
//    2.yield each item to to an iteratee function
//    3.Item is bound to context object if one is passed.
//    4.Each invocation is called with(element,index,list)
//    5.if list is a js object it is called with(value,key,list)
//    6.return the list for chaining

// 2) I: list of elements(array,object,nodelist,etc...),iteratee function
//    O: list for chaining
//    C: work on arrays, objects, and array-like objects such as arguments,nodelist and similar,
//    E: list is empty,no function is passed

// 3) Write Tests
// //    _.each([1, 2, 3], alert);
// => alerts each number in turn...
// _.each({one: 1, two: 2, three: 3}, alert);
// => alerts each number value in turn...

// 4) High Level Strategy
//    1.iterate the list and invoke on each element a function, return the list
//
//    2.make seperate list, iterate seperate list and invoke it with function, return the main list
//

// 5) Pseudocode the Strategy
//
//    when list is a js object invoke it with different arguments
//    iterate the list and for each item
//      invoke a function
//    return the list

// 6) Implement the Solution

function each(list, f) {
  if (typeof list === 'object' && !Array.isArray(list) && list !== null) {
    for (let i in list) {
      f(list[i], i, list);
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      f(list[i], i, list);
    }
  }

  return list;
}

// console.log(each({ one: 1, two: 2, three: 3 }, alert));

// ------------------------------------------------------------------------------------

// indexOf

// Returns the index at which value can be found in the array, or -1 if value is not present in the array.
// If you're working with a large array, and you know that the array is already sorted, pass true for isSorted to use a faster binary search ... or,
// pass a number as the third argument in order to look for the first matching value in the array after the given index.
// If isSorted is true, this function uses operator < (note).

// _.indexOf([1, 2, 3], 2);
// => 1

// 1) Interpret the Prompt
//    1.)return the index at which value can be found in array, if not present return -1

//

// 2) I: array, number
//    O:
//    C:if array is sorted pass true for isSorted or pass number as third argument to look for first matching value after given index
//    E: array empty

// 3) Write Tests
//    indexOf([1, 2, 3], 2)=>1

// 4) High Level Strategy
//    1.is array sorted? if yes pass isssorted true
//    if not find the value in array,
//    return the index of value in array
//
//

//    2. iterate array and check if it is value
//    if yes return index of value in array
//    if no repeat step 1 until end of length> return -1

// 5) Pseudocode the Strategy
//
//    check if array is sorted
//    when we have a sorted array pass isSorted:true
//    otherwise iterate through array
//    check if item is value
//    if item is value return index of item in array
//    if item is not value continue iteration until end then return -1

// 6) Implement the Solution

function indexOf(array, val) {
  if (array.length === 0) return 'Oops array seems to be empty';
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return i;
    }
  }
  return -1;
}

// console.log(indexOf([1, 2, 3], 2));

// ------------------------------------------------------------------------------------

// filter

// Looks through each value in the list, returning an array of all
// the values that pass a truth test (predicate). predicate is transformed
//  through iteratee to facilitate shorthand syntaxes.

// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]

// 1) Interpret the Prompt
//    return an array of all values in an array that dont pass a truth test(predicate)

// 2)

//   I:list,function
//   O:array with false values
//   C:
//   E:

// 3) Write Tests
//      reject([1, 2, 3, 4, 5, 6],function(num){ return num % 2 == 0; })=>[1,3,5]
// 4) High Level Strategys

//    1.
//     Iterate all elements and check if they are returning false through a function
//      Return false elements in an array

//    2.
//    create a result array
//    iterate the values in array
//    push all false items to result array
//    return result array

// 5) PseudoCode

//   Declare Result Array
//   iterate through collection for each item
//      invoke predicate with items
//        push false values to result array
//    Return Result Array

// 6) Implement the solution

function remove(list, f) {
  let resultArray = [];
  if (typeof list === 'object' && !Array.isArray(list) && list !== null) {
    for (let i in list) {
      if (!f(list[i])) {
        resultArray.push(list[i]);
      }
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      if (!f(list[i])) {
        resultArray.push(list[i]);
      }
    }
  }
  return resultArray;
}

// console.log(
//   remove([1, 2, 3, 4, 5, 6], function (num) {
//     return num % 2 == 0;
//   })
// );

// ------------------------------------------------------------------------------------

// reject_.reject

function filter(list, f) {
  let resultArray = [];
  if (typeof list === 'object' && !Array.isArray(list) && list !== null) {
    for (let i in list) {
      if (f(list[i])) {
        resultArray.push(list[i]);
      }
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      if (f(list[i])) {
        resultArray.push(list[i]);
      }
    }
  }
  return resultArray;
}

// console.log(
//   filter([1, 2, 3, 4, 5, 6, 8, 10], function (num) {
//     return num % 2 == 0;
//   })
// );

// ------------------------------------------------------------------------------------

// uniq

// Produces a duplicate-free version of the array, using === to test object equality.
// In particular only the first occurrence of each value is kept. If you know in advance that the array is sorted,
//  passing true for isSorted will run a much faster algorithm.
//  If you want to compute unique items based on a transformation, pass an iteratee function.

// _.uniq([1, 2, 1, 4, 1, 3]);
// => [1, 2, 4, 3]

// 1) Interpret the Prompt
//   return array with duplicate free values
//   only first occurence is kept
//   if array is sorted , pass isSorted:true

// 2)

//   I:array

//   O: array

//   C:

//   E:array is empty

// 3) Write Tests
//uniq([1, 2, 1, 4, 1, 3])=> [1, 2, 4, 3]
//
//
// 4) High Level Strategys

//      1.
//
//          iterate through array
//          check if item is already in result
//          if yes delete it
//          if no keep it
//          return array

// 5) PseudoCode

//     Declare an foundValues Object
//          iterate array
//            check if item is already in foundValues Object
//               if so delete current item
//               if not add it to foundValues
//          Return Array
//

// 6) Implement the solution

function uniq(array) {
  let foundValues = {};
  for (let i = 0; i < array.length; i++) {
    if (foundValues[array[i]] === 1) {
      array.splice(i, 1);
      i = i - 1;
    } else {
      foundValues[array[i]] = 1;
    }
  }
  return array;
}

// console.log(uniq([1, 2, 1, 4, 1, 3, 3, 5, 6, 2, 3, 3, 3, 3]));

// ------------------------------------------------------------------------------------

// map

// Produces a new array of values by mapping each value in list through a transformation function (iteratee).
// The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a
// reference to the entire list.

// _.map([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]
// _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// => [3, 6, 9]
// _.map([[1, 2], [3, 4]], _.first);
// => [1, 3]

// 1) Interpret the Prompt
//    1.produce a new array of values by mapping each value in list
//      through ieratee function.
//    2.iteratee is passed(value,index(key),list)
//    3.return new array

// 2)

//   I: list,iteratee

//   O: array

//   C:

//   E:

// 3) Write Tests

// map([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]
// map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// => [3, 6, 9]
// map([[1, 2], [3, 4]], _.first);
// => [1, 3]

// 4) High Level Strategys

//      1.
//      Create new Array
//      Iterate collection and check if object
//        pass all values to iterate function and push result to new Array
//      Return new Array
//
//
//
//

// 5) PseudoCode
//      create result Array
//      Iterate collection
//        invoke all functions with function and pass result to result Array
//      Return Result Array

// 6) Implement the solution

function map(list, f) {
  let resultArray = [];

  if (typeof list === 'object' && !Array.isArray(list) && list !== null) {
    for (let i in list) {
      let resultF = f(list[i], i, list);
      resultArray.push(resultF);
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      let resultF = f(list[i], i, list);
      resultArray.push(f(list[i]));
    }
  }
  return resultArray;
}

// console.log(
//   map([1, 2, 3, 6, 8], function (num) {
//     return num * 3;
//   })
// );
// console.log(
//   map({ one: 1, two: 2, three: 3 }, function (num, key) {
//     return num * 3;
//   })
// );
// console.log(
//   map([1, 2, 3], function (num) {
//     return num * 3;
//   })
// );

// ------------------------------------------------------------------------------------

// pluck
// A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.pluck(stooges, 'name');
// => ["moe", "larry", "curly"]

// 1) Interpret the Prompt

//    extract all property values of a list

// 2)

//   I: list

//   O:array

//   C:

//   E: no property on item?

// 3) Write Tests

//var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
//          pluck(stooges,'name')

// 4) High Level Strategys
//
//      1.Create Result Array
//        iterate list ,check if property exsists on item, if yes push it to result Array
//      Return Result Array

//      2.

// 5) PseudoCode
//      Create Result Array
//      Iterate List
//        check if property exists on item
//           push property value to result Array
//      Return Result Array

// 6) Implement the solution

function pluck(list, prop) {
  let resultArray = [];

  if (typeof list === 'object' && !Array.isArray(list) && list !== null) {
    for (let i in list) {
      if (list[i][prop]) {
        resultArray.push(list[i][prop]);
      }
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      if (list[i][prop]) {
        resultArray.push(list[i][prop]);
      }
    }
  }
  return resultArray;
}

// console.log(
//   pluck(
//     [
//       { name: 'moe', age: 40 },
//       { name: 'larry', age: 50 },
//       { name: 'curly', age: 60 },
//       { name: '', age: 20 },
//     ],
//     'age'
//   )
// );

// ------------------------------------------------------------------------------------

// reduce_.reduce

// Also known as inject and foldl, reduce boils down a list of
// values into a single value. Memo is the initial state of the
// reduction, and each successive step of it should be returned by iteratee.
// The iteratee is passed four arguments: the memo, then the value
// and index (or key) of the iteration, and finally a reference to the entire list.

// If no memo is passed to the initial invocation of reduce, the iteratee is not invoked
// on the first element of the list. The first element is instead passed as the memo in
// the invocation of the iteratee on the next element in the list.

// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// => 6

// 1) Interpret the Prompt

//  1.)boils down a list of values into a single value.
//  2.)"Memo" is initial state of reduction
//  3.)each succesive step should be returned by iteratee.
//  4.)iteratee is passed(memo,value,index(or key),list)
//  5.) No memo to initial invoation? iteratee not invoked on first element of list
//    5.b) instead first element is passed to the next iteratee incovation

// 2)

//   I:list,function,number

//   O:value

//   C:

//   E: no memo,list empty

// 3) Write Tests
//    var sum = reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// => 6
//

// 4) High Level Strategys

//      1.get initial state of memo
//        define memo
//        for every item in list invoke iteratee with current memo
//        add each result to memo
//        return memo

//      2.invoke all items with "memo"
//
//

//      1.is there a memo
//        if memo do
//         invoke iteratee on all elements with(memo,value,index,list), get result of it
//          add result to memo
//        repeat until end and return memo

//        if no memo
//            not invoked on first iteration, first element becomes memo
//              return memo
//      2.
//
//

// 5) PseudoCode

//        define memo
//        iterate list
//        invoke each item with memo
//        add each result to memo
//        return memo

// 6) Implement the solution

function reduce(list, f, nr) {
  let memo;
  if (typeof nr === 'number') {
    memo = nr;
  }
  if (!typeof nr === 'number') {
    memo = list[0];
  }

  if (typeof list === 'object' && !Array.isArray(list) && list !== null) {
    for (let i in list) {
      memo = f(memo, list[i], i, list);
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      memo = f(memo, list[i], i, list);
    }
  }

  return memo;
}

// console.log(
//   reduce(
//     [1, 2, 3],
//     function (memo, num) {
//       return memo + num;
//     },
//     0
//   )
// );

// ------------------------------------------------------------------------------------

// contains

// Returns true if the value is present in the list.
// Uses indexOf internally, if list is an Array. Use fromIndex to start
// your search at a given index.

// _.contains([1, 2, 3], 3);
// => true

// 1) Interpret the Prompt
//    if value is present in list return true

// 2)

//   I: list,value

//   O: boolean

//   C:

//   E:

// 3) Write Tests
// _.contains([1, 2, 3], 3);
// => true

// 4) High Level Strategys

//      1.check if value is in list
//        if yes return true else return false

// 5) PseudoCode

//      iterate list
//       check if item is value
//        if yes return true
//       if end of list return false

// 6) Implement the solution

function contains(list, value) {
  if (typeof list === 'object' && !Array.isArray(list) && list !== null) {
    for (let i in list) {
      if (list[i] === value) return true;
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === value) return true;
    }
  }
  return false;
}

// console.log(contains([1, 2, 5], 3));

// ------------------------------------------------------------------------------------

// every
// Returns true if all of the values in the list pass the predicate truth test.
// Short-circuits and stops traversing the list if a false element is found.
// predicate is transformed through iteratee to facilitate shorthand syntaxes.

// _.every([2, 4, 5], function(num) { return num % 2 == 0; });
// => false

//1.interpret the prompt
//    if all values in list pass predicate truth test return true
//    if any false value is found break iteration and return false

//2.I:list,function
//  O:boolean
//  C:
//  E:function does not return boolean

//3.Write Tests
// every([2, 4, 5], function (num) {
//   return num % 2 == 0;
// });

//4.High Level Strategy

//5.Pseudo Code

//    iterarte list
//    invoke each item with predicate
//    if predicate is false return false
//    if end of list return true

//6.Implement Solution

function every(list, f) {
  for (let i = 0; i < list.length; i++) {
    f(list[i]);
    if (f(list[i]) === false) return false;
  }
  return true;
}

// console.log(
//   every([2, 4, 6], function (num) {
//     return num % 2 == 0;
//   })
// );

// ------------------------------------------------------------------------------------

// shuffle

// Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.

// _.shuffle([1, 2, 3, 4, 5, 6]);
// => [4, 1, 6, 3, 5, 2]

//1.Interpet the prompt
//  take list ,shuffle it and return shuffled copy
//
//

//2.I:list
//  O:list
//  C:use fisher yates shuffle
//  E:

//3.Write Tests
// _.shuffle([1, 2, 3, 4, 5, 6]);
// => [4, 1, 6, 3, 5, 2]

//4.higher level strategys

//      1. take list,
//         iterate list
//          for each item make a random number of list length and check if it was already chosen array
//             save random number to chosen array
//           put item in the random place
//          at the end return new list

//       2.iterate list
//          for each item make random number of list length
//            push item on top of that random number
//          at the end of list return new list
//

//5.Pseudo Code

//          create new list array
//          iterate list
//          for each item make a random number between 0 and list length
//          place item on that position
//          return new list

//6.Implement Solution

function shuffle(list) {
  let resultArray = [];

  for (let i = 0; i < list.length; i++) {
    let randomNumber = Math.floor(Math.random() * list.length);

    resultArray.splice(randomNumber, 0, list[i]);
  }
  return resultArray;
}
// console.log(shuffle([1, 3, 4, 5, 6, 7]));

// ------------------------------------------------------------------------------------

// sortBy

// Returns a (stably) sorted copy of list,
// ranked in ascending order by the results of running each value through iteratee.
// iteratee may also be the string name of the property to sort by (eg. length).
// This function uses operator < (note).

// _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
// => [5, 4, 6, 3, 1, 2]

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.sortBy(stooges, 'name');
// => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];

//1.interpet prompt
//  returns a copy of list
//  ranked in ascending order each item run agains iteratee
//   iteratee could also be a string name

//2.I:list,function,string
//  O:list
//  C:
//  E:

//3.Write Tests
// _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
// => [5, 4, 6, 3, 1, 2]

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.sortBy(stooges, 'name');
// => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];

//4.Higher Level Strategy

//   1.  create new result array
//       check if iteratee is string or function
//       iterate list
//       put first item to the result array
//       (compare invoked item) to (last item on new list (invoked))
//       if greater push it on top
//       if it is smaller loop back the list and check if it is greater than any invoked item
//       if yes position it there
//       if no unshift it to the end

//        return Result array

//5.Pseudo Code

//      create new list
//      iterate list
//      put first item to the new list
//      compare invoked item to the last item on list invoked
//      if greater push it to end
//      else make loop and check if it is greater than any item in list
//      if yes position it in front
//      if no unshift it to the end
//      return result
//
//

//6. implement solution

function sortBy(list, iteratee) {
  let newResultArray = [];

  if (typeof iteratee === 'string') {
    newResultArray[0] = list[0];
    for (let i = 1; i < list.length; i++) {
      for (let j = newResultArray.length; j >= 0; j--) {
        if (
          newResultArray[j - 1] !== undefined &&
          list[i][iteratee] > newResultArray[j - 1][iteratee]
        ) {
          newResultArray.splice(j, 0, list[i]);
          break;
        }
        if (j === 0) {
          newResultArray.unshift(list[i]);
        }
      }
    }
    j = newResultArray.length;
  }

  if (typeof iteratee !== 'string') {
    newResultArray[0] = list[0];
    for (let i = 1; i < list.length; i++) {
      for (let j = newResultArray.length; j >= 0; j--) {
        if (iteratee(list[i]) > iteratee(newResultArray[j - 1])) {
          newResultArray.splice(j, 0, list[i]);
          break;
        }
        if (j === 0) {
          newResultArray.unshift(list[i]);
        }
      }
    }
    j = newResultArray.length;
  }
  return newResultArray;
}

// console.log(
//   sortBy([1, 2, 3, 4, 5, 6], function (num) {
//     return Math.sin(num);
//   })
// );

var stooges = [
  { name: 'moe', age: 40 },
  { name: 'larry', age: 50 },
  { name: 'curly', age: 60 },
];
// console.log(sortBy(stooges, 'name'));
// => [5, 4, 6, 3, 1, 2]

// function sortBy(list, iteratee) {
//   let resultArray = [];

//   if (typeof iteratee === 'string') {
//     for (let i = 0; i < list.length; i++) {}
//   } else {
//     resultArray[0] = list[0];
//     for (let i = 1; i < list.length; i++) {
//       let invokedItem = iteratee(list[i]);
//       if (invokedItem > iteratee(resultArray[resultArray.length - 1])) {
//         resultArray.push(list[i]);
//       } else {
//         for (let i = list.length; i >= 0; i--) {
//           if (invokedItem > iteratee(list[i])) {
//             resultArray.splice(i, 0, list[i]);
//           }
//         }
//         resultArray.unshift(list[i]);
//       }
//     }
//   }
//   return resultArray;
// }

// console.log(
//   sortBy([1, 2, 3, 4, 5, 6], function (num) {
//     return Math.sin(num);
//   })
// );

// => [5, 4, 6, 3, 1, 2]

// ------------------------------------------------------------------------------------

// zip

// Merges together the values of each of the arrays
// with the values at the corresponding position. Useful
// when you have separate data sources that are coordinated through
// matching array indexes.

// _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

//1.Interpret prompt
//  merges value of each of the arrays with corresponding values
//

//2.I:array
//  O:array
//  C:
//  E: no corresponding value? check if all arrays have same length

//3. Write Tests
// _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

//4. Higher Level Strategy

//    1S.
//    iterate all arrays and push each array[position] to the same array

//    2S.

//5. Pseudo Code
//   create newResultArray
//   iterate spreadedArray
//   for each item in spreadedarray take position x++
//   push item to newResultArray
//   return newResultArray

//6. Implement solution

// function zip(...args) {
//   let newResultArray = [];
//   console.log(newResultArray);
//   let spreadedArray = [...args];

//   // for (let j = 0; j < spreadedArray.length; j++) {
//   //   if (
//   //     !spreadedArray.every((item) => item.length === spreadedArray[0].length)
//   //   ) {
//   //     return 'ERROR one of the arrays is too short';
//   //   }
//   // }
//   function test2() {
//     for (let i = 0; i < spreadedArray[0].length; i++) {
//       console.log(newResultArray);
//       newResultArray[i] = [];
//     }
//     test();
//   }
//   function test() {
//     console.log('nope', newResultArray);
//     let counter = 0;
//     console.log(newResultArray);

//     for (let j = 0; j < spreadedArray[0].length; j++) {
//       newResultArray[j].push(spreadedArray[j][counter]);
//       for (let k = 1; k < spreadedArray.length; k++) {
//         newResultArray[j].push(spreadedArray[k][j]);
//       }
//     }
//   }
//   test2();

//   return newResultArray;
// }

// console.log(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]));
// // => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

// ------------------------------------------------------------------------------------

// extend

// Shallowly copy all of the properties in the source
// objects over to the destination object, and return the destination object.
// Any nested objects or arrays will be copied by reference, not duplicated.
// It's in-order, so the last source will override properties of the same name in previous arguments.

// _.extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}

//Interpret the prompt
// Copy all properties of source object, to destination object
// return destination object
// all nested objects or array copied by reference
// last source will always override properties of the same name

// I:objects
// O:object
// C:nested objects copied by reference,last source overrides properties
// E: input no object,input object empty

////Write Tests
// extend({name:"gabriel",test:"1"},{name:"leirbag"},{age:50})
// =>{name:"leirbag",age:50}

//High Level Strategy
//Strategy 1)
// create result object
//create spreaded Array
// spread all objects to spreaded Array
// iterate spreaded Array and iterate single object
// copy key/values to the result object and override if possible
// if nested array or object copy it by reference
// return result object

//Strategy 2)
// create result object
// crate spreaded Array
//spread all objects to spreaded Array
//iterate spreaded Array and iterate single Object
//find if key/value is already there, if yes override if no copy it to the object
//return result object

// Pseudocode Strategy
//  //High Level Pseudocode
//  I will create an empty object
//  I will create an empty Array
//  I will spread inputs to the Array
//  I will loop over  Array and for each Item i will also loop over
//  I will copy each key/value to the Result object ,
//  If key value is array or object i will copy it by reference to the result object
//  If key/value is already there i will override it
//  Else i will create it
// I will return the result object

//Create Skeleton
// function extend(...args){
// const resultObject={}
// const spreadedArray=[...args]
//
//  return resultObject
// }

//Implement solution
function extend(...args) {
  const resultObject = {};
  const spreadedArray = [...args];

  for (let i = 0; i < spreadedArray.length; i++) {
    for (const [key, value] of Object.entries(spreadedArray[i])) {
      let b = spreadedArray[i][key];
      resultObject[key] = b;
    }
  }

  return resultObject;
}
let testobject1 = { name: 'gabriel', test: { testobject: '1' } };
let testobject2 = { name: 'leirbag' };
let testobject3 = { age: 50 };

let test = extend(testobject1, testobject2, testobject3);

// =>{name:"leirbag",test:"1",age:50}

// ------------------------------------------------------------------------------------

// defaults

// Returns object after filling in its undefined properties
// with the first value present in the following list of defaults objects.

// var iceCream = {flavor: "chocolate"};
// _.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
// => {flavor: "chocolate", sprinkles: "lots"}

// Interpret prompt
// fill all object values from the following list key/values
// return original object

// I:object,list
// O:object
// C:
// E:

//Write tests
// var iceCream = {flavor: "chocolate"};
// defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
// => {flavor: "chocolate", sprinkles: "lots"}

//higher level strategys
//  loop over list and check if key/value === undefined , if so replace it with default value
// return object

//
//in list filter out all object key/values that are already present in object
// replace all remaining key/values in object
// return object

//pseudocode
//  is list object or array
//  if object
//    iterate object ,for each item check if key=== undefined
//      if undefined replace it with value , if not do nothing
//  if array
//     iterate array , for eacth item check if key===undefined
//      if undefined replace it with value,if not do nothing
//  return object

//Implement solution

function defaults(obj, list) {
  if (typeof list === 'object' && !Array.isArray(list) && list !== null) {
    for (const [key, value] of Object.entries(list)) {
      if (obj[key] === undefined) {
        obj[key] = value;
      }
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      if (obj[i] === undefined) {
        obj[i] = list[i];
      }
    }
  }
  return obj;
}

var iceCream = { flavor: 'chocolate' };
// console.log(defaults(iceCream, { flavor: 'vanilla', sprinkles: 'lots' }));
// => {flavor: "chocolate", sprinkles: "lots"}

// ------------------------------------------------------------------------------------

// once

// Creates a version of the function that can only be called one time.
//  Repeated calls to the modified function will have no effect, returning the value from the original call.
//   Useful for initialization functions, instead of having to set a boolean flag and then check it later.

// var initialize = _.once(createApplication);
// initialize();
// initialize();
// // Application is only created once.

// Interpret prompt
// create version of function taht can only be called once
// return value from original call

// I:function
// O:value from original function
// C:
// E: what if a function returns another function?

//Write tests
// once(createApplication) => return value from original function
// once(createApplication) =>returns nothing
// once(createApplication) =>returns nothing

//higher level strategys
//1.
// check if funciton was called already
// initialize incoming function
// mark that this function is called already
//return value from original function

//2.
// initalize function
// save value
// delete original function
// return value
//

//pseudocode
// check if function was called already
//  if yes do nothing
//  if no {
//    initialize function and save return value
// mark that function was called
// return the value
// }

//Implement solution
let called = false;
function createApplication() {
  return 'created application';
}

function once(fn) {
  if (called) return;
  let returnValue = fn();
  called = true;
  return returnValue;
}

// console.log(once(createApplication));

// ------------------------------------------------------------------------------------

// memoize

// Memoizes a given function by caching the computed result.
// Useful for speeding up slow-running computations. If passed an optional hashFunction,
// it will be used to compute the hash key for storing the result,
// based on the arguments to the original function.
// The default hashFunction just uses the first argument to the memoized function as the key.
// The cache of memoized values
//  is available as the cache property on the returned function.

// var fibonacci = _.memoize(function(n) {
//   return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
// });

// 1) Interpret the Prompt
//   1.Memoizes a function by caching the computed result.
//   2.if Hashfunction, it will compute the hash key for storing the result with this Hashfunction, based on args to original fn
//   2.a default hashFunction uses first arg to the memoized fn as the key
//   3. The cache of memoized values is available as the cache property on the returned function.
//

// 2)

//   I:function,hashFunction

//   O: function

//   C:  hashFunction provided

//   E:

// 3) Write Tests
// var fibonacci = memoize(function(n) {
//   return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
// });

// 4) High Level Strategys

//      1.
//      cache the computed result form the function
//      if HashFunction
//      else cache of value is available on cache property
//

//      2.

// 5) PseudoCode
//    cache the result from function
//
//

// 6) Implement the solution

const memoize = function (fn, hashFn) {
  let cache = {};
  return (...args) => {
    console.log('args', ...args);
    let n = args[0];
    if (n in cache) {
      console.log('Fetching from cache', n);
      return cache[n];
    } else {
      console.log('Calculating result', n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

var fibonacci = memoize(function (n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10));
// ------------------------------------------------------------------------------------

// delay

// Much like setTimeout, invokes function after wait milliseconds.
// If you pass the optional arguments, they will be forwarded on to the
// function when it is invoked.

// var log = _.bind(console.log, console);
// delay(log, 1000, 'logged later');
// => 'logged later' // Appears after one second.

// 1) Interpret the Prompt
//   invokes function after "wait" milliseconds
//   if optional arguments, they will be forwarded to the function when it is invoked
//

// 2)

//   I:function,number,arguments

//   O:function invoked after wait seconds

//   C:

//   E:

// 3) Write Tests
// var log = _.bind(console.log, console);
// delay(log, 1000, 'logged later');
// => 'logged later' // Appears after one second.

// 4) High Level Strategys

//      1.
//      how many seconds to wait?
//      count down the seconds
//      at 0 seconds invoke function(optionally with args)

//      2.
//
//
//

// 5) PseudoCode
//
//    setTimeout(with X seconds)
//    after setTimeout execute function with args
//
//

// 6) Implement the solution

function delay(fn, waitSeconds, optionalArg) {
  setTimeout(() => {
    fn(optionalArg);
  }, waitSeconds);
}

// delay(console.log, 1000, 'test');

function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else return n * factorial(n - 1);
}

console.log(factorial(4));

// check if string is palindrome
function checkPalindrome(str) {
  if (str.length === 2) {
    if (str[0] === str[1]) return str[0];
    else return '';
  }

  let a = [...str];
  if (a.length % 2 === 0) {
    let left = a.splice(0, a.length / 2);
    console.log('first', left.join(''), a.join(''));
    if (left.join('') === a.reverse().join('')) return true;
    else return false;
  } else {
    let left = a.splice(0, a.length / 2);
    let right = a.splice(1);
    console.log('second', left.join(''), right.join(''));
    if (left.join('') === right.reverse().join('')) return true;
    else return false;
  }
}
