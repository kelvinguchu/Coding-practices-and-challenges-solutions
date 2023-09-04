"use strict";

/**
 * Merge Sort algorithm.
 */

/**
 * Merge function to combine two sorted arrays.
 *
 * @param {Array} arr - The main array.
 * @param {number} l - Leftmost index.
 * @param {number} m - Middle index.
 * @param {number} r - Rightmost index.
 */
function merge(arr, l, m, r) {
  const n1 = m - l + 1; // Length of the left half.
  const n2 = r - m; // Length of the right half.

  // Create temporary arrays for left and right halves.
  let left = new Array(n1);
  let right = new Array(n2);

  // Copy data to temp arrays left[] and right[].
  for (let i = 0; i < n1; i++) {
    left[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    right[j] = arr[m + 1 + j];
  }

  // Merge the temp arrays back into arr[].
  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of left[], if there are any.
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }

  // Copy the remaining elements of right[], if there are any.
  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

/**
 * Main function that sorts arr[l...r] using merge().
 *
 * @param {Array} arr - The array to be sorted.
 * @param {number} l - Leftmost index.
 * @param {number} r - Rightmost index.
 */
function mergeSort(arr, l, r) {
  if (l < r) {
    // Find the middle point of the array.
    const m = Math.floor((l + r) / 2);

    // Recursively sort the first and second halves.
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
}

// Usage example:
const array = [38, 27, 43, 3, 9, 82, 10];
mergeSort(array, 0, array.length - 1);
console.log(array); // Outputs: [ 3, 9, 10, 27, 38, 43, 82 ]
