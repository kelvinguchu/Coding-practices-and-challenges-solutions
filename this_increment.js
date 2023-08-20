function Increment() {
    this.count = 0;
}

Increment.prototype.increment = function() {
    this.count++;
}

var increment = new Increment();
var increment2 = new Increment();

console.log(increment.count);  // Output: 0
increment.increment();
console.log(increment.count);  // Output: 1
increment.increment();
console.log(increment.count);  // Output: 2
