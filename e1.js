//A javascript program that gives the sum of even numbers in an array.

//Declare an array of numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*Define a fuction that uses for_of loop
to iterate over the numbers in the array*/
function findSum(){
    let sum = 0; // Initialise the sum to 0.
    for(const x of numbers){
        if( x % 2 == 0){
            sum += x;
        };
    };
    return sum;
};

console.log(findSum());