/**
 * Kruskal's minimum spanning tree algorithm.
 */

/**
 * Class to represent an edge in the graph.
 * Each edge has a source, destination, and weight.
 */
class Edge {
    constructor(src, dest, weight) {
        this.src = src; // Starting point of the edge
        this.dest = dest; // Ending point of the edge
        this.weight = weight; // Weight or cost associated with the edge
    }
}

/**
 * Union-Find (or Disjoint Set) data structure.
 * This structure allows us to:
 * 1. Combine two sets.
 * 2. Find the representative element (or leader) of a set.
 * It's particularly useful in checking if adding an edge will form a cycle in the MST.
 */
class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i); // Initially, each element is its own parent
        this.rank = Array(size).fill(0); // Used for optimizations when uniting two sets
    }

    /**
     * Recursively finds the representative element of a set.
     * Also does path compression for optimization.
     */
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    /**
     * Unites two sets x and y.
     * It uses rank to determine which tree goes under the other to keep the tree flat.
     */
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}

/**
 * Computes the minimum spanning tree (MST) using Kruskal's algorithm.
 * The algorithm works by adding the smallest edge that doesn't form a cycle until we have (vertices - 1) edges.
 */
function kruskal(vertices, edges) {
    const mst = []; // Holds the resulting MST
    const unionFind = new UnionFind(vertices);

    // Sort all edges based on weight
    edges.sort((a, b) => a.weight - b.weight);

    for (const edge of edges) {
        const set1 = unionFind.find(edge.src);
        const set2 = unionFind.find(edge.dest);

        // If the sets of the two ends of the edge are different, they are not connected, so adding this edge won't form a cycle.
        if (set1 !== set2) {
            mst.push(edge); // Add the edge to the result
            unionFind.union(set1, set2); // Merge the two sets
        }
    }

    return mst; // Return the edges forming the MST
}

// Example usage:

const edges = [
    new Edge(0, 1, 10),
    new Edge(0, 2, 6),
    new Edge(0, 3, 5),
    new Edge(1, 3, 15),
    new Edge(2, 3, 4)
];

const mst = kruskal(4, edges);

console.log("Edges in the minimum spanning tree:");
for (const edge of mst) {
    console.log(`(${edge.src}, ${edge.dest}) - Weight: ${edge.weight}`);
}
