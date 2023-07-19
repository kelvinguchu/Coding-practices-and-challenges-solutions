// a function that checks if numbes in a given array add up to a given target sum.

const numbers = [1, 2, 3, 4, 5];

function findTarget (target, array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(findTarget(20, numbers));