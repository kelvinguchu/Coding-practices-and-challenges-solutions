'use strict'

/**
 * The Node class represents individual elements (or "nodes") in a linked list.
 * Each node contains a piece of data and a reference to the next node in the sequence.
 */
class Node {
  constructor(data) {
    this.data = data; // The actual data the node is storing.
    this.next = null; // Reference to the next node in the list, initially null.
  }
}

/**
 * The LinkedList class represents a singly linked list.
 * It provides methods to manage and operate on the list.
 */
class LinkedList {
  constructor() {
    this.head = null; // The first node in the list. It's null for an empty list.
  }

  /**
   * Appends a new node with the given data to the end of the list.
   * @param {*} data - The data for the new node.
   */
  append(data) {
    const newNode = new Node(data); // Create a new node with the given data.

    if (!this.head) {
      // If the list is currently empty, make the new node the head of the list.
      this.head = newNode;
      return;
    }

    // If the list isn't empty, traverse it to find the last node.
    let current = this.head;
    while (current.next) {
      current = current.next; // Move to the next node.
    }
    // Once the last node is found, append the new node to it.
    current.next = newNode;
  }

  /**
   * Displays the contents of the list in the console.
   */
  display() {
    let current = this.head; // Start from the head node.
    while (current) {
      console.log(current.data); // Print the current node's data.
      current = current.next; // Move on to the next node.
    }
  }
}

// Example of using the LinkedList class:

// Create a new linked list instance.
const myList = new LinkedList();

// Add data to the list.
myList.append(10);
myList.append(20);
myList.append(30);

// Display the contents of the list.
myList.display();
