/**
 * Linear Search algorithm.
 */

/**
 * Linear Search function that returns the index of target in the array arr.
 * If target is not present in arr, it returns -1.
 *
 * @param {Array} arr - The array to be searched.
 * @param {number} target - The value to be searched for.
 * @returns {number} The index of target in the array or -1 if target is not found.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // Target found at index i.
        }
    }
    return -1;  // Target not found in the array.
}

// Usage example:
const array = [24, 18, 12, 9, 16, 66, 32, 4];
const target = 16;

const result = linearSearch(array, target);
if (result !== -1) {
    console.log(`Element ${target} is present at index ${result}`);
} else {
    console.log(`Element ${target} is not present in the array`);
}
