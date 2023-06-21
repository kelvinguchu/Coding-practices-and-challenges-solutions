/*A Javascript program that checks if a string is a palindrome
returns true if a string is a palindrome, else, false*/

function checkPalindrome(string){
    const palindrome = string.replace(/[^A-Z, 0-9]/gi, "").toLowerCase();

    return palindrome === palindrome.split("").reverse().join('');
}

console.log(checkPalindrome("9racecar9")); //true
console.log(checkPalindrome("morandev")); //false