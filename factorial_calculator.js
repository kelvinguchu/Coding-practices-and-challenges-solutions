'use strict';

/*
  a function that calculates the factorial of a number.

  The function takes a number 'n' as input and initializes a variable 'fact' to 1.
  It then iterates through numbers from 1 to 'n' using a for loop and updates 'fact'
  by multiplying it with the current number in each iteration.
  After the loop, the function returns the final value of 'fact', which represents the factorial of 'n'.
*/
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

// Call the factorial function and print the result to the console
console.log(factorial(2)); // Output: 2 (2! = 2)
