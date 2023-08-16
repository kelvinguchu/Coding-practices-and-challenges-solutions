/**
 * TrieNode class represents a single node of a Trie.
 */
class TrieNode {
    constructor() {
        // Children nodes of the current node, stored as a map where
        // the keys are characters and values are TrieNode instances.
        this.children = {};

        // Flag to determine if the current node represents the end 
        // of a complete word.
        this.isEndOfWord = false;
    }
}

/**
 * Trie class provides a basic implementation of a Trie.
 */
class Trie {
    constructor() {
        // Root node of the Trie. It doesn't hold any character value.
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the Trie.
     *
     * @param {string} word - The word to be inserted.
     */
    insert(word) {
        let currentNode = this.root;

        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }

        // Mark the current node as the end of the word.
        currentNode.isEndOfWord = true;
    }

    /**
     * Checks if the Trie contains a given word.
     *
     * @param {string} word - The word to search for.
     * @returns {boolean} True if the word exists in the Trie, false otherwise.
     */
    search(word) {
        let currentNode = this.root;

        for (let char of word) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }

        // Return true if the current node is marked as the end of a word.
        return currentNode.isEndOfWord;
    }

    /**
     * Returns whether there's any word in the Trie that starts with the given prefix.
     *
     * @param {string} prefix - The prefix to search for.
     * @returns {boolean} True if any word in the Trie starts with the prefix, false otherwise.
     */
    startsWith(prefix) {
        let currentNode = this.root;

        for (let char of prefix) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }

        return true;
    }
}

// Usage example:
const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));     // Outputs: true
console.log(trie.search("app"));       // Outputs: false
console.log(trie.startsWith("app"));   // Outputs: true

trie.insert("app");
console.log(trie.search("app"));       // Outputs: true
