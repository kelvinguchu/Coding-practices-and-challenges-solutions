'use strict';

/*
  a function to print "Fizz" for multiples of 3,
  "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.

  The function iterates through numbers from 1 to 100 using a for loop.
  For each number, it checks if it is a multiple of both 3 and 5,
  and if so, prints "FizzBuzz". If it is only a multiple of 3, it prints "Fizz".
  If it is only a multiple of 5, it prints "Buzz".
  If none of these conditions are met, it prints the number itself.
*/
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Call the fizzBuzz function to print the desired output
fizzBuzz();
