'use strict';

/*
  a function that checks for the highest number in an array.

  The function takes an array of numbers as input and iterates through the array
  to find the highest number. It initializes a variable called `largestNumber`
  with the first element of the array and then compares it with each element in the array.
  If an element is greater than the current `largestNumber`, it updates the `largestNumber`.
  Finally, the function returns the highest number found in the array.
*/
function findNumber(numbers) {
  // Initialize `largestNumber` with the first element of the array
  let largestNumber = numbers[0];

  // Loop through the array to find the highest number
  for (const x of numbers) {
    // Compare the current element with the current `largestNumber`
    if (x > largestNumber) {
      // If the current element is greater, update `largestNumber`
      largestNumber = x;
    }
  }

  // Return the highest number found in the array
  return largestNumber;
}

// Declare an array
const numbers = [40, 9, 60, 2, 83, 200, 100, 22, 7];

// Example usage
console.log(findNumber(numbers)); // Output: 200
