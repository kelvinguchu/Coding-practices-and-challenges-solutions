'use strict';

/*
  a function that finds the maximum consecutive sum in an array.

  The function takes a comma-separated string of numbers as input.
  It converts the input string into an array of numbers, finds the maximum consecutive sum
  by adding adjacent elements in the array, and returns the result.
*/
function maxConsecutiveSum(string) {
  // Convert the comma-separated input string into an array of numbers
  array = string.split(",").map(num => parseInt(num.trim()));

  // Initialize maxSum with the sum of the first two elements in the array
  let maxSum = array[0] + array[1];

  // Loop through the array, starting from the second element
  // and find the maximum consecutive sum
  for (let i = 1; i < array.length - 1; i++) {
    // Calculate the sum of the current element and the next element
    const currentSum = array[i] + array[i + 1];

    // If the current sum is greater than the current maxSum, update maxSum
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  // Return the maximum consecutive sum
  return maxSum;
}

// Example usage
console.log(maxConsecutiveSum("1, 3, 4, 7, 2, 9, 15, 4")); // Output: 24 (15 + 9)
