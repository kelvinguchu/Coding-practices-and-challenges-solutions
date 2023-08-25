'use strict'

//a simple example to illustrate the optional chaining operator

let user = {
  name: "Alice",
  details: {
    age: 25,
    address: {
      city: "Paris",
      country: "France"
    }
  }
};

console.log(user.details?.address?.city); // Output: Paris
console.log(user.details?.contact?.phone); // Output: undefined
