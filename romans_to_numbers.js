'use strict'; 

// a function to convert a Roman numeral to an integer
function romanToNumeral(roman) {
  // Object that maps Roman numerals to their corresponding values
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0; // Initialize the result to store the final integer value
  let prevValue = 0; // Variable to keep track of the previous numeral's value

  // Loop through the Roman numeral from right to left
  for (let i = roman.length - 1; i >= 0; i--) {
    const current = roman[i]; // Get the current Roman numeral character
    const currentValue = romanNumerals[current]; // Get the corresponding value from the object

    // Check if the current value is greater than or equal to the previous value
    if (currentValue >= prevValue) {
      result += currentValue; // If true, add the current value to the result
    } else {
      result -= currentValue; // If false, subtract the current value from the result
    }

    prevValue = currentValue; // Update the previous value for the next iteration
  }

  return result; // Return the final converted integer value
}

// Example usage
console.log(romanToNumeral("III")); // Output: 3
console.log(romanToNumeral("IX")); // Output: 9
console.log(romanToNumeral("XXI")); // Output: 21
console.log(romanToNumeral("MCMLIV")); // Output: 1954
