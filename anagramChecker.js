// a function to check if two given words are anagrams of each other.

function checkAnagram (word1, word2) {
    let word1Array = word1.split('').sort().join('');
    let word2Array = word2.split('').sort().join('');
    return word1Array === word2Array;
};

console.log(checkAnagram('listen', 'silent')); // true