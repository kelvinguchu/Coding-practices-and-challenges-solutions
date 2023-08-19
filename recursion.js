/**
 * Recursive function to calculate the factorial of a number.
 *
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} The factorial of n.
 */
function factorial(n) {
    // Base case: factorial of 0 is 1.
    if (n === 0) {
        return 1;
    }
    // Recursive case: n times factorial of (n-1).
    else {
        return n * factorial(n - 1);
    }
}

// Usage example:
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);  // Outputs: "Factorial of 5 is: 120"
