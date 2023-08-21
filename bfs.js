/**
 * Breadth First Search (BFS) for a graph.
 */

/**
 * Implements BFS on a graph starting from a source vertex.
 * 
 * @param {number} s - The source vertex to start BFS from.
 * @param {Map<number, number[]>} adjList - The adjacency list of the graph.
 */
function BFS(s, adjList) {
    // Create a visited array to keep track of visited vertices
    const visited = new Map();

    // Create a queue for BFS and enqueue the source vertex
    const queue = [];
    queue.push(s);
    visited.set(s, true);

    while (queue.length > 0) {
        // Dequeue a vertex from the queue and print it
        const vertex = queue.shift();
        console.log(vertex);

        // Get all adjacent vertices of the dequeued vertex
        const neighbors = adjList.get(vertex);

        // Mark the adjacent vertices that are not visited and enqueue them
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.set(neighbor, true);
            }
        }
    }
}

// Usage example:

// Create an adjacency list representation of a graph
// For this example, let's assume we have a graph with 5 vertices (0 to 4) and the following edges: 
// 0-1, 0-2, 1-2, 2-3, 2-4, 3-4
const adjList = new Map();
adjList.set(0, [1, 2]);
adjList.set(1, [0, 2]);
adjList.set(2, [0, 1, 3, 4]);
adjList.set(3, [2, 4]);
adjList.set(4, [2, 3]);

console.log("BFS starting from vertex 0:");
BFS(0, adjList);
