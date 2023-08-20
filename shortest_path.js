/**
 * Dijkstra's shortest path algorithm.
 * Dijkstra's algorithm is a graph search algorithm that solves the single-source shortest path
 * problem for a graph with non-negative edge path costs, producing a shortest path tree.
 */

/**
 * A simple priority queue implementation used by the Dijkstra algorithm.
 * It's designed to always dequeue the element with the smallest priority (or distance).
 */
class PriorityQueue {
    constructor() {
        this.queue = [];  // Underlying data structure to hold the elements
    }

    /**
     * Add an element to the queue with a given priority.
     * After adding, it sorts the queue by priority.
     */
    enqueue(val, priority) {
        this.queue.push({ val, priority });
        this.sort();
    }

    /**
     * Remove and return the element from the front of the queue, which has the smallest priority.
     */
    dequeue() {
        return this.queue.shift();
    }

    /**
     * Check if the priority queue is empty.
     */
    isEmpty() {
        return this.queue.length === 0;
    }

    /**
     * Sort the queue elements by priority.
     * This ensures that the element with the smallest priority is always at the front.
     */
    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }
}

/**
 * Computes the shortest path distances from a source vertex to all other vertices.
 * 
 * @param {number} src - The source vertex from where distances are to be calculated.
 * @param {Map<number, {node: number, weight: number}[]>} adjList - The adjacency list representing the graph.
 * @returns {number[]} - Distance array, where distance[i] represents the shortest distance from the source to vertex i.
 */
function dijkstra(src, adjList) {
    const size = adjList.size;  // Total number of vertices in the graph
    const pq = new PriorityQueue();  // Priority queue to select the vertex with the shortest known distance
    const dist = Array(size).fill(Infinity);  // Initial distances set to infinity

    // Start from the source vertex, its distance to itself is 0
    dist[src] = 0;
    pq.enqueue(src, 0);  // Insert source into priority queue

    // As long as the priority queue is not empty, there are still vertices to process
    while (!pq.isEmpty()) {
        let { val: u } = pq.dequeue();  // Extract vertex with shortest distance

        // Go through each neighbor of u
        for (let { node: v, weight } of adjList.get(u) || []) {
            // If we find a shorter path to v through u, update the shortest distance and re-insert v into the priority queue
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.enqueue(v, dist[v]);
            }
        }
    }

    // Return the computed shortest distances
    return dist;
}

// Usage example:

// Representing the graph using an adjacency list.
// Each entry is a list of neighbors for a vertex, along with the edge weight to that neighbor.
const adjList = new Map();
adjList.set(0, [{ node: 1, weight: 4 }, { node: 2, weight: 2 }]);
adjList.set(1, [{ node: 2, weight: 5 }, { node: 3, weight: 10 }]);
adjList.set(2, [{ node: 4, weight: 3 }]);
adjList.set(3, [{ node: 4, weight: 1 }]);
adjList.set(4, []);

// Finding shortest distances from vertex 0 to all other vertices
console.log("Shortest distances starting from vertex 0:");
const distances = dijkstra(0, adjList);
console.log(distances);  // Expected output: [0, 4, 2, 12, 5]
