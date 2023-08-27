// Constructor function
function Person(name) {
    this.name = name;
}

// Adding a method to the prototype of Person
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Creating instances
const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob

console.log(person1.hasOwnProperty("name")); // Output: true
console.log(person1.hasOwnProperty("greet")); // Output: false

// Since 'greet' is not a direct property of person1,
// JavaScript looks up the prototype chain to find it.
