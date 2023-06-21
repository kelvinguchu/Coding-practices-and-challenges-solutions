//A javascript code that checks for the highest number in an array.

//Declare an array.
const numbers = [40, 9, 60, 2, 83, 200, 100, 22, 7];

//Define a function.
function findNumber(numbers){
    let largestNumber = numbers[0];

    for(const x of numbers){
        if (x > largestNumber){
            largestNumber  = x;
        };
    };
return largestNumber;
};

console.log(findNumber(numbers));