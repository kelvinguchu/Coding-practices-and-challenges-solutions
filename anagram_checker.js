'use strict';

/*
  a function to check if two given words are anagrams of each other.
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
  This function takes two words as input, sorts their characters, and checks if the sorted strings are equal, which means they are anagrams.
*/
function checkAnagram(word1, word2) {
  // Split the input words into arrays of characters, sort them, and then join them back into strings
  let word1Array = word1.split('').sort().join('');
  let word2Array = word2.split('').sort().join('');

  // Compare the sorted strings to check if they are anagrams
  return word1Array === word2Array;
}

console.log(checkAnagram('listen', 'silent')); // true
