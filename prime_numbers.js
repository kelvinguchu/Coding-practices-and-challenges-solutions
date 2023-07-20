'use strict';

// a function that prints prime numbers in a given range
function primeNumbers(start, end) {
  // Loop through the numbers from 'start' to 'end'
  for (let i = start; i <= end; i++) {
    let isPrime = true; // Initialize a variable to check if 'i' is prime

    // Check for factors of 'i' from 2 to 'i-1'
    for (let j = 2; j < i; j++) {
      // If 'i' is divisible by any number other than 1 and itself, it is not prime
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    // If 'isPrime' is still true after the inner loop, 'i' is a prime number
    if (isPrime) {
      console.log(i); // Print the prime number
    }
  }
}

// Example usage: Print prime numbers from 1 to 100
primeNumbers(1, 100);
