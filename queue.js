'use strict'

/**
 * Queue is a linear data structure that follows a First In First Out (FIFO) 
 * principle, meaning the first element inserted will be the first one to be 
 * removed. This class provides a basic implementation of a Queue using an array.
 */
class Queue {
    /**
     * Initializes a new instance of the Queue class.
     */
    constructor() {
        // items will hold the elements in the queue
        this.items = [];
    }

    /**
     * Enqueues an element to the end of the queue.
     * 
     * @param {any} element - The element to be added to the end of the queue.
     */
    enqueue(element) {
        this.items.push(element);
    }

    /**
     * Dequeues an element from the front of the queue.
     * 
     * @returns {any} The front element from the queue. If the queue is empty, 
     * a message indicating that will be returned.
     */
    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.items.shift();
    }

    /**
     * Returns the front element of the queue without removing it.
     * 
     * @returns {any} The front element of the queue. If the queue is empty, 
     * a message indicating that will be returned.
     */
    front() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.items[0];
    }

    /**
     * Determines whether the queue is empty.
     * 
     * @returns {boolean} True if the queue is empty; otherwise, false.
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Gets the number of elements contained in the queue.
     * 
     * @returns {number} The number of elements contained in the queue.
     */
    size() {
        return this.items.length;
    }

    /**
     * Prints the contents of the queue to the console.
     */
    print() {
        console.log(this.items.toString());
    }
}

// Usage example:
const queue = new Queue();

queue.enqueue(1);   // Add 1 to the queue
queue.enqueue(2);   // Add 2 to the queue
queue.enqueue(3);   // Add 3 to the queue

console.log(queue.front()); // Check the front element. Expected output: 1
console.log(queue.size());  // Check the number of elements. Expected output: 3

queue.print();      // Display the queue contents. Expected output: 1,2,3

queue.dequeue();    // Remove the front element
console.log(queue.front()); // Check the front element. Expected output: 2

queue.enqueue(4);   // Add 4 to the queue
queue.print();      // Display the queue contents. Expected output: 2,3,4
