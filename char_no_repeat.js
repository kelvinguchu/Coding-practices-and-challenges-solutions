function noRepeat (string) {
    const array = string.split('').sort();

    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i - 1]) {
            return array[i];
        }
    }
}

console.log(noRepeat('guchukelvin')); // returns e

function firstNonRepeatedCharacter(string) {
    for (let char of string) {
      if (string.split(char).length - 1 === 1) {
        return char;
      }
    }
    return null;
  }

  console.log(firstNonRepeatedCharacter('abracadabra')); //returns c