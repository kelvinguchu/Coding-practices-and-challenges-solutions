// a function that prints prime numbers in a given range

function primeNumbers (start, end) {
    for (let i = start; i <= end; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

primeNumbers(1, 100); //prints prime numbers from 1-100