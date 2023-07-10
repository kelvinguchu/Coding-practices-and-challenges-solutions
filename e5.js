/*a function that takes a sentence and returns the 
longest word in the sentence and the first word if the words have the same length */

function longestWord(string) {
    let words = string.split(" ");
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        };
    };
    return longestWord;
};

console.log(longestWord("The quick brown fox jumped over the lazy dog"));
console.log(longestWord("fox dog the red"));