//a function that finds the missing number in an array of integers from 1 to 100.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
function findMissingNumber(array) {
    for (let i = 1; i <= 100; i++) {
        if (!array.includes(i)) {
            return i;
        };
    };
    return 0;
}

console.log(findMissingNumber(numbers));