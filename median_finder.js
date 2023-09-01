"use strict";

// Define a function to find the median of an array of numbers
function findMedian(array) {
  // Create a copy of the input array to avoid modifying the original
  const newArray = array.slice();
  // Get the length of the new array
  const length = newArray.length;

  // Sort the array in ascending order
  newArray.sort((a, b) => a - b);

  // Check if the length of the array is even
  if (length % 2 === 0) {
    // If the length is even, calculate the two middle indices
    const midIndex1 = length / 2 - 1;
    const midIndex2 = length / 2;
    // Return the average of the two middle values as the median
    return (newArray[midIndex1] + newArray[midIndex2]) / 2;
  } else {
    // If the length is odd, calculate the middle index
    const midIndex = Math.floor(length / 2);
    // Return the middle value as the median
    return newArray[midIndex];
  }
}

// Example input: an array of numbers
const numbers = [2, 3, 9, 6, 5, 4, 10, 19];
// Call the findMedian function to calculate the median
const median = findMedian(numbers);
// Print the calculated median to the console
console.log("Median:", median);
