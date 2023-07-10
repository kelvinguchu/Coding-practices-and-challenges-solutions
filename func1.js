// a function that calculates the factorial of a number

function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(2));