'use strict';

// a function to reverse a string
function reverseString(string) {
    // Split the string into an array of characters, reverse the array, and join the characters back into a string
    let reversedString = string.split("").reverse().join('');
    // Return the reversed string
    return reversedString;
  };
  
  // Call the reverseString function with the argument "kelvin" and log the result
  console.log(reverseString("kelvin"));
  