/**
 * Stack is a linear data structure which follows a particular order in which the
 * operations are performed. The order may be LIFO (Last In First Out) or FILO
 * (First In Last Out). This class provides a basic implementation of a Stack
 * using an array.
 */
class Stack {
    /**
     * Initializes a new instance of the Stack class.
     */
    constructor() {
        // Items will hold the elements in the stack
        this.items = [];
    }

    /**
     * Pushes an element onto the top of the stack.
     * 
     * @param {any} element - The element to push onto the stack.
     */
    push(element) {
        this.items.push(element);
    }

    /**
     * Removes and returns the top element of the stack.
     * 
     * @returns {any} The top element from the stack. If the stack is empty, a 
     * message indicating that will be returned.
     */
    pop() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.items.pop();
    }

    /**
     * Returns the top element of the stack without removing it.
     * 
     * @returns {any} The top element of the stack. If the stack is empty, a 
     * message indicating that will be returned.
     */
    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.items[this.items.length - 1];
    }

    /**
     * Determines whether the stack is empty.
     * 
     * @returns {boolean} True if the stack is empty; otherwise, false.
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Gets the number of elements contained in the stack.
     * 
     * @returns {number} The number of elements contained in the stack.
     */
    size() {
        return this.items.length;
    }

    /**
     * Removes all elements from the stack.
     */
    clear() {
        this.items = [];
    }

    /**
     * Prints the contents of the stack to the console.
     */
    print() {
        console.log(this.items.toString());
    }
}

// Usage example:
const stack = new Stack();

stack.push(1);   // Add 1 to the stack
stack.push(2);   // Add 2 to the stack
stack.push(3);   // Add 3 to the stack

console.log(stack.peek()); // Check the top element. Expected output: 3
console.log(stack.size()); // Check the number of elements. Expected output: 3

stack.print();   // Display the stack contents. Expected output: 1,2,3

stack.pop();     // Remove the top element
console.log(stack.peek()); // Check the top element. Expected output: 2

stack.clear();   // Clear all the elements in the stack
console.log(stack.isEmpty()); // Check if the stack is empty. Expected output: true
