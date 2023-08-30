/**
 * Bubble sort algorithm.
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
 * Bubble Sort function that sorts the given array.
 *
 * @param {Array} arr - The array to be sorted.
 */
function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Flag to optimize the algorithm. If there are no swaps
        // in the inner loop, then the array is already sorted.
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            // Compare the adjacent elements and swap if they are in the wrong order.
            if (arr[j] > arr[j + 1]) { 
                swap(arr, j, j + 1);
                swapped = true;
            }
        }

        // If no two elements were swapped by the inner loop, the array is sorted.
        if (!swapped) {
            break;
        }
    }
}

// Usage example:
const array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log(array);  // Outputs: [11, 12, 22, 25, 34, 64, 90]
