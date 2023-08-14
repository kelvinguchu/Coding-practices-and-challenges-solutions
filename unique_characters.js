function unique(string) {
    const arr = string.split('');
    arr.sort();

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(unique('hello')); // Output: false (due to repeated 'l')
console.log(unique('world')); // Output: true (no repeated letters)
