'use strict'; 

/* a function that checks if a string is a palindrome
   Returns true if a string is a palindrome, else, false */
function checkPalindrome(string) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  const palindrome = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  
  // Compare the original string with its reversed version to check for palindrome
  return palindrome === palindrome.split("").reverse().join("");
}

// Example usage: Check if strings are palindromes
console.log(checkPalindrome("A man, a plan, a canal: Panama")); // true
console.log(checkPalindrome("morandev")); // false
