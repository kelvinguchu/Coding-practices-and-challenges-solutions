function convertToRoman(num) {
    if (typeof num !== 'number') {
      throw new Error('Input must be a number');
    }
  
    if (num < 1 || num > 3999) {
      throw new Error('Input must be between 1 and 3999');
    }
  
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let roman = '';
  
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        roman += key;
        num -= romanNumerals[key];
      }
    }
  
    return roman;
  }
  
  // Example usage
  console.log(convertToRoman(36));  // Output: XXXVI
  console.log(convertToRoman(2021));  // Output: MMXXI
  console.log(convertToRoman(3999));  // Output: MMMCMXCIX
  console.log(convertToRoman(95));  // Output: XCV