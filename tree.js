/**
 * TreeNode class represents a single node in the binary tree.
 * Each node has a value, a left child, and a right child.
 */
class TreeNode {
    /**
     * Initializes a new instance of the TreeNode class.
     *
     * @param {any} value - The value stored in the node.
     */
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * BinaryTree class provides a basic implementation of a binary tree.
 */
class BinaryTree {
    /**
     * Initializes a new instance of the BinaryTree class.
     */
    constructor() {
        this.root = null;
    }

    /**
     * Inserts a value into the binary tree.
     *
     * @param {any} value - The value to insert.
     */
    insert(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
            return;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = new TreeNode(value);
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = new TreeNode(value);
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    /**
     * Performs an in-order traversal of the binary tree.
     *
     * @param {TreeNode} node - The starting node for the traversal (typically the root).
     * @param {Function} callback - A callback function called for every node.
     */
    inOrderTraversal(node, callback) {
        if (node) {
            this.inOrderTraversal(node.left, callback);
            callback(node.value);
            this.inOrderTraversal(node.right, callback);
        }
    }
}

// Usage example:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(9);

tree.inOrderTraversal(tree.root, value => console.log(value)); 
// This will print the values in ascending order: 1, 3, 4, 5, 7, 8, 9
