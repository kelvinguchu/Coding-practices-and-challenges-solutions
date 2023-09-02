"use strict";

/*
  a function that takes a sentence and returns the longest word in the sentence.
  If multiple words have the same length, it returns the first word found with that length.

  The function takes a string as input and splits it into words using the space character.
  It then iterates through the words to find the longest word and returns it.
*/
function longestWord(string) {
  // Split the input sentence into words using the space character as the separator
  let words = string.split(" ");

  // Initialize the variable to hold the longest word with the first word in the sentence
  let longestWord = words[0];

  // Loop through the words starting from the second word
  // and find the longest word in the sentence
  for (let i = 1; i < words.length; i++) {
    // Compare the length of the current word with the length of the current longest word
    if (words[i].length > longestWord.length) {
      // If the current word is longer, update the longestWord variable
      longestWord = words[i];
    }
  }

  // Return the longest word found in the sentence
  return longestWord;
}

// Example usage
console.log(longestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
console.log(longestWord("fox dog the red")); // Output: "fox"
