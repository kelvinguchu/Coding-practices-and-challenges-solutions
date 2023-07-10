/*a function that finds the maximum consecutive sum in an array*/

function maxConsecutiveSum(string) {
    array = string.split(",").map(num => parseInt(num.trim()));
    let maxSum = array[0] + array[1];
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] + array[i + 1] > maxSum) {
            maxSum = array[i] + array[i + 1];
        }
    }
    return maxSum;
}

console.log(maxConsecutiveSum("1, 3, 4, 7, 2, 9, 15, 4"));