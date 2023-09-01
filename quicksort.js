'use strict';

/**
 * Quicksort algorithm.
 */

/**
 * Swap elements in the array.
 *
 * @param {Array} arr - The array.
 * @param {number} i - Index of the first element to swap.
 * @param {number} j - Index of the second element to swap.
 */
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * Partition the array segment defined by low and high around a pivot.
 *
 * @param {Array} arr - The array.
 * @param {number} low - Start index of the segment.
 * @param {number} high - End index of the segment.
 * @returns {number} The pivot index after partitioning.
 */
function partition(arr, low, high) {
    // Taking the last element as the pivot.
    const pivot = arr[high];

    // Index of smaller element.
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than or equal to the pivot.
        if (arr[j] <= pivot) {
            i++; 
            swap(arr, i, j);
        }
    }

    // Move pivot to its final position.
    swap(arr, i + 1, high);
    return (i + 1);
}

/**
 * Main function to perform quicksort.
 *
 * @param {Array} arr - The array to be sorted.
 * @param {number} low - Starting index.
 * @param {number} high - Ending index.
 */
function quickSort(arr, low, high) {
    if (low < high) {
        // Find pivot element such that elements smaller than the pivot 
        // are on the left and elements greater are on the right.
        const pivotIndex = partition(arr, low, high);

        // Recursively sort the elements before and after the pivot.
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

// Usage example:
const array = [10, 7, 8, 9, 1, 5];
quickSort(array, 0, array.length - 1);
console.log(array);  // Outputs: [ 1, 5, 7, 8, 9, 10 ]
