"use strict";

/**
 * Binary search algorithm.
 */

/**
 * Binary Search function that returns the index of target in the sorted array arr.
 * If target is not present in arr, it returns -1.
 *
 * @param {Array} arr - The sorted array.
 * @param {number} target - The value to be searched for.
 * @returns {number} The index of target in the array or -1 if target is not found.
 */
function binarySearch(arr, target) {
  let left = 0; // Starting index of the array.
  let right = arr.length - 1; // Ending index of the array.

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Middle index of the current segment.

    // Check if target is present at mid.
    if (arr[mid] === target) {
      return mid;
    }

    // If target is greater than the middle element, it can only be present in the right subarray.
    if (arr[mid] < target) {
      left = mid + 1;
    }
    // Otherwise, target can only be present in the left subarray.
    else {
      right = mid - 1;
    }
  }

  // Target was not found in the array.
  return -1;
}

// Usage example:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

const result = binarySearch(array, target);
if (result !== -1) {
  console.log(`Element ${target} is present at index ${result}`);
} else {
  console.log(`Element ${target} is not present in the array`);
}
