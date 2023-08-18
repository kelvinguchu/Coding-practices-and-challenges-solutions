/**
 * SimpleHashMap class provides a basic implementation of a hash map.
 */
class SimpleHashMap {
    /**
     * Initializes a new instance of the SimpleHashMap class.
     */
    constructor() {
        // We use a JavaScript object as the underlying data store.
        // This allows us to take advantage of JavaScript's built-in 
        // hashing capabilities. Note: in a real-world scenario, you'd 
        // likely implement your own hash function.
        this.items = {};
    }

    /**
     * Inserts or updates a key-value pair in the hash map.
     *
     * @param {string} key - The key.
     * @param {any} value - The value associated with the key.
     */
    set(key, value) {
        this.items[key] = value;
    }

    /**
     * Gets the value associated with a given key.
     *
     * @param {string} key - The key.
     * @returns {any} The value associated with the key, or undefined if the key doesn't exist.
     */
    get(key) {
        return this.items[key];
    }

    /**
     * Removes the key-value pair associated with a given key.
     *
     * @param {string} key - The key.
     */
    delete(key) {
        delete this.items[key];
    }

    /**
     * Checks if a key exists in the hash map.
     *
     * @param {string} key - The key.
     * @returns {boolean} True if the key exists, false otherwise.
     */
    has(key) {
        return key in this.items;
    }

    /**
     * Returns an array of all keys in the hash map.
     *
     * @returns {Array<string>} An array of all keys.
     */
    keys() {
        return Object.keys(this.items);
    }
}

// Usage example:
const map = new SimpleHashMap();

map.set('name', 'Alice');
map.set('age', 30);

console.log(map.get('name'));  // Outputs: 'Alice'
console.log(map.has('age'));   // Outputs: true

map.delete('age');
console.log(map.has('age'));   // Outputs: false

console.log(map.keys());  // Outputs: ['name']
