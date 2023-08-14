function reverseSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        const revword = words[i].split('').reverse().join('');
        reversedWords.push(revword);
    }

    return reversedWords.reverse().join(' ');
}

console.log(reverseSentence('hello world')); //outputs 'dlrow olleh'