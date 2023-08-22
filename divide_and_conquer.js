/**
 * Merge Sort using Divide and Conquer.
 *
 * Merge sort works by repeatedly dividing the array into two halves until each sub-array
 * contains a single element, and then merging those sub-arrays in a manner that results
 * into a sorted array.
 */

/**
 * Merges two sorted subarrays into a single sorted array.
 * This function is a critical component of the merge sort as it is responsible for the "conquer" part of the algorithm.
 * 
 * @param {number[]} arr - The main array being sorted.
 * @param {number} l - The starting index of the left sorted subarray.
 * @param {number} m - The ending index of the left sorted subarray (it's the midpoint).
 * @param {number} r - The ending index of the right sorted subarray.
 */
function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    // Temporary arrays to hold the two subarrays to be merged.
    let L = new Array(n1);
    let R = new Array(n2);

    // Populating the temporary arrays with data from the main array.
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    // Initialize indices for left, right subarrays and merged array.
    let i = 0;
    let j = 0;
    let k = l;

    // Merge process: compare elements of the two subarrays and place the smaller one in the main array.
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // In case the left subarray had elements left, place them in the main array.
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Similarly, if the right subarray had elements left, place them in the main array.
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

/**
 * Main mergeSort function that sorts an array using the divide and conquer approach.
 * It keeps splitting the array in two and then merging them in a sorted manner.
 * 
 * @param {number[]} arr - The array to be sorted.
 * @param {number} l - The leftmost index of the subarray (inclusive).
 * @param {number} r - The rightmost index of the subarray (inclusive).
 */
function mergeSort(arr, l, r) {
    // Base case: If the subarray has one or zero elements, it's inherently sorted.
    if (l >= r) {
        return;
    }

    // Calculate the midpoint of the current array/subarray.
    let m = l + Math.floor((r - l) / 2);

    // Recursive call to sort the left and right halves.
    mergeSort(arr, l, m);   // Sort the left half
    mergeSort(arr, m + 1, r);  // Sort the right half

    // Merge the two halves that were sorted.
    merge(arr, l, m, r);
}

// Usage example:
let array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original unsorted array:", array);

mergeSort(array, 0, array.length - 1);

console.log("Array after Merge Sort:", array);
