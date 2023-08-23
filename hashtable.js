/**
 * HashTable class provides an implementation of a hash table, which maps
 * keys to values. This implementation resolves collisions using separate chaining.
 */
class HashTable {
    /**
     * Initializes a new instance of the HashTable class with a given size.
     *
     * @param {number} size - Size of the underlying array.
     */
    constructor(size = 50) {
        // The underlying array for the hash table
        this.buckets = new Array(size);
        // Store the size of the array
        this.size = size;
    }

    /**
     * Computes a hash for a given key.
     *
     * @param {any} key - The key to compute a hash for.
     * @returns {number} The hash of the key.
     */
    _hash(key) {
        let hash = 0;
        for (let char of key.toString()) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    /**
     * Sets a key-value pair in the hash table.
     *
     * @param {any} key - The key of the item.
     * @param {any} value - The value to associate with the key.
     */
    set(key, value) {
        const index = this._hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push([key, value]);
    }

    /**
     * Retrieves the value for a given key.
     *
     * @param {any} key - The key of the item to retrieve.
     * @returns {any} The value associated with the key, or undefined if the key doesn't exist.
     */
    get(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        if (bucket) {
            for (let [k, v] of bucket) {
                if (k === key) {
                    return v;
                }
            }
        }
        return undefined;
    }
}

// Usage example:
const hashTable = new HashTable();

hashTable.set('name', 'John');  // Add a key-value pair to the hash table
hashTable.set('age', 30);       // Add another key-value pair

console.log(hashTable.get('name')); // Retrieve a value by its key. Expected output: John
console.log(hashTable.get('age'));  // Retrieve a value by its key. Expected output: 30
console.log(hashTable.get('location')); // Try to retrieve a non-existent key. Expected output: undefined
