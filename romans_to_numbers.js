function romanToNumeral(roman) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const current = roman[i];
      const currentValue = romanNumerals[current];
  
      if (currentValue >= prevValue) {
        result += currentValue;
      } else {
        result -= currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }
  
  // Example usage
  console.log(romanToNumeral("III")); // Output: 3
  console.log(romanToNumeral("IX")); // Output: 9
  console.log(romanToNumeral("XXI")); // Output: 21
  console.log(romanToNumeral("MCMLIV")); // Output: 1954

  /*The romanToNumeral function is declared with one parameter, roman, which is expected to be a string representing a Roman numeral.

An object named romanNumerals is defined. This object serves as a dictionary or a map that relates each Roman numeral character to its equivalent integer value.

Two variables, result and prevValue, are initialized to 0. result is used to accumulate the final result of the conversion, while prevValue is used to remember the value of the previous Roman numeral character during the loop that scans the input string.

The main part of the function is a for loop that scans the input string from right to left. The reason for the right-to-left scan is the way Roman numerals represent values like 4 or 9: they're expressed as "IV" (5 - 1) and "IX" (10 - 1), respectively. So the smaller value must be subtracted from the larger one, which requires reading from right to left.

Inside the loop, current is assigned the current Roman numeral character, and currentValue is its equivalent integer value, looked up in the romanNumerals object.

If the currentValue is greater than or equal to prevValue, the currentValue is added to result. If not, it means the situation is like "IV" or "IX", where the smaller number comes first, so currentValue is subtracted from result.

After the calculation for the current character is done, prevValue is updated to currentValue for the next loop iteration.

When the loop finishes, result will contain the integer value equivalent to the input Roman numeral, which is returned by the function. */
  