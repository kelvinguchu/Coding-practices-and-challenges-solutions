'use strict'

// declare an empty array to represent a stack.
var letters = [];

// in this case we will use the stack to check if a string is a palindrome.
//declare the string you will check if it is a plaindrome.
var word = "madam";

// declare an empty string where we will store the values after popping the stack
var reverseWord = "";

// loop through the string and add(push) them to the `letters` stack.
for (var i = 0; i < word.length; i++){
    // push the letter onto the stack
    letters.push(word[i]);
};

// loop through the word and reverse the letters by popping them.
for (var i = 0; i < word.length; i++){
    // pop the letter from the stack
    reverseWord += letters.pop();
};

//check if the reversed word is equal to the original word
if (reverseWord === word){
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
};