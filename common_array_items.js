'use strict';

/*
  a function that takes two arrays and returns elements that are present in both arrays.

  The function uses the 'filter' method on 'array1' and applies a callback function
  that checks if each item from 'array1' is also present in 'array2'.
  The 'filter' method creates a new array ('result') containing elements that satisfy the condition.
  Finally, the 'result' array is printed to the console.
*/
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];

let result = array1.filter((item) => array2.includes(item));
console.log(result); // Output: [4, 5] (elements present in both arrays)
