/**
 * MinHeap class provides an implementation of a binary min heap.
 * In a Min Heap, for any given node I, the value of I is less than or 
 * equal to the values of its children.
 */
class MinHeap {
    /**
     * Initializes a new instance of the MinHeap class.
     */
    constructor() {
        // The underlying array to store heap elements.
        this.heap = [];
    }

    /**
     * Gets the index of the parent of a node at index i.
     *
     * @param {number} i - The index of the node.
     * @returns {number} The index of the parent node.
     */
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    /**
     * Inserts a new value into the heap, ensuring the min-heap property is maintained.
     *
     * @param {number} value - The value to be inserted.
     */
    insert(value) {
        this.heap.push(value);
        let i = this.heap.length - 1;
        while (i > 0 && this.heap[i] < this.heap[this.getParentIndex(i)]) {
            // Swap the value with its parent
            [this.heap[i], this.heap[this.getParentIndex(i)]] = [this.heap[this.getParentIndex(i)], this.heap[i]];
            i = this.getParentIndex(i);
        }
    }

    /**
     * Removes and returns the smallest value from the heap.
     *
     * @returns {number} The smallest value from the heap.
     */
    remove() {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);

        return min;
    }

    /**
     * Ensures the subtree rooted at i satisfies the heap property.
     *
     * @param {number} i - The index of the root of the subtree.
     */
    heapify(i) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.heapify(smallest);
        }
    }
}

// Usage example:
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);

console.log(minHeap.remove());  // Removes and prints the smallest element: 1
console.log(minHeap.remove());  // Removes and prints the next smallest element: 3
