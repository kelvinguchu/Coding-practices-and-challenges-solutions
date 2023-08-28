/**
 * Depth First Search (DFS) for a graph.
 */

/**
 * Recursive function to traverse the graph using depth-first search from a given vertex.
 * 
 * @param {number} vertex - The current vertex being explored.
 * @param {Map<number, number[]>} adjList - The adjacency list of the graph.
 * @param {Map<number, boolean>} visited - A map to keep track of visited vertices.
 */
function DFSUtil(vertex, adjList, visited) {
    // Mark the current vertex as visited and print it
    visited.set(vertex, true);
    console.log(vertex);

    // Get all adjacent vertices of the current vertex
    const neighbors = adjList.get(vertex);

    // Recur for all the vertices adjacent to this vertex that haven't been visited yet
    for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
            DFSUtil(neighbor, adjList, visited);
        }
    }
}

/**
 * Initializes the necessary data structures and starts the DFS process.
 * 
 * @param {number} s - The source vertex to start DFS from.
 * @param {Map<number, number[]>} adjList - The adjacency list of the graph.
 */
function DFS(s, adjList) {
    // Create a visited map to keep track of visited vertices
    const visited = new Map();

    // Start the DFS traversal from the given source vertex
    DFSUtil(s, adjList, visited);
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

console.log("DFS starting from vertex 0:");
DFS(0, adjList);
