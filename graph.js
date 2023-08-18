/**
 * Graph class provides a basic implementation of an undirected graph 
 * using an adjacency list.
 */
class Graph {
    /**
     * Initializes a new instance of the Graph class.
     */
    constructor() {
        // The adjacency list will be a JavaScript object.
        // The keys will represent nodes, and the values will be arrays 
        // that list all nodes connected to the key-node by an edge.
        this.adjacencyList = {};
    }

    /**
     * Adds a new node to the graph.
     *
     * @param {number} node - The node to be added to the graph.
     */
    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
        }
    }

    /**
     * Adds an edge between two nodes in the graph.
     * Since this is an undirected graph, it adds the connection both ways.
     *
     * @param {number} node1 - The first node.
     * @param {number} node2 - The second node.
     */
    addEdge(node1, node2) {
        if (!this.adjacencyList[node1] || !this.adjacencyList[node2]) {
            throw new Error("Both nodes need to exist in the graph.");
        }
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }

    /**
     * Removes an edge between two nodes in the graph.
     *
     * @param {number} node1 - The first node.
     * @param {number} node2 - The second node.
     */
    removeEdge(node1, node2) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(node => node !== node2);
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(node => node !== node1);
    }

    /**
     * Removes a node and all its edges from the graph.
     *
     * @param {number} node - The node to be removed.
     */
    removeNode(node) {
        while (this.adjacencyList[node].length) {
            const adjacentNode = this.adjacencyList[node].pop();
            this.removeEdge(node, adjacentNode);
        }
        delete this.adjacencyList[node];
    }
}

// Usage example:
const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log(graph.adjacencyList); 
// Expected output:
// {
//   '1': [ 2, 3 ],
//   '2': [ 1, 4 ],
//   '3': [ 1 ],
//   '4': [ 2 ]
// }

graph.removeEdge(1, 2);
console.log(graph.adjacencyList); 
// Expected output:
// {
//   '1': [ 3 ],
//   '2': [ 4 ],
//   '3': [ 1 ],
//   '4': [ 2 ]
// }

graph.removeNode(3);
console.log(graph.adjacencyList); 
// Expected output:
// {
//   '1': [],
//   '2': [ 4 ],
//   '4': [ 2 ]
// }
