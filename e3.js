/*A Javascript program that checks if a string is a palindrome
returns true if a string is a palindrome, else, false*/

function checkPalindrome(string) {
    const palindrome = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    return palindrome === palindrome.split("").reverse().join("");
  }
  
  console.log(checkPalindrome("A man, a plan, a canal: Panama")); // true
  console.log(checkPalindrome("morandev")); // false
  