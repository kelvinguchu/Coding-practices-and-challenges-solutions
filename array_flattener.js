"use strict";

//a function that takes in a nested array and returns a single array with all values flattened.
//It should work for an array of arbitrary depth.

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(flatten(array));
