function findMedian(array) {
    const newArray = array.slice();
    const length = newArray.length;

    newArray.sort((a,b) => a - b);

    if (length % 2 === 0) {
        const midIndex1 = length / 2 - 1;
        const midIndex2 = length / 2;
        return (newArray[midIndex1] + newArray[midIndex2] / 2);
    }else {
        const midIndex = Math.floor(length/2);
        return newArray[midIndex]
    }
}

const numbers = [2, 3, 9, 6, 5, 4, 10, 19];
const median = findMedian(numbers)
console.log("Median:", median)