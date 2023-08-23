/**
 * N-Queens puzzle solution using Backtracking.
 */

/**
 * A classic problem that uses backtracking is the N-Queens puzzle. The problem is to place 
�
N chess queens on an N×N chessboard so that no two queens threaten each other
(i.e., they don't share the same row, column, or diagonal).
 */

/**
 * Checks if a queen can be placed on board[row][col].
 * Note that this function is called when "queens" queens are already placed in columns from 0 to queens-1.
 * So we need to check only the left side for attacking queens.
 * 
 * @param {number[][]} board - The chessboard.
 * @param {number} row - The row index.
 * @param {number} col - The column index.
 * @returns {boolean} - True if safe, False otherwise.
 */
function isSafe(board, row, col) {
    const N = board.length;

    // Check the column of the given row
    for (let i = 0; i < col; i++) {
        if (board[row][i] === 1) {
            return false;
        }
    }

    // Check upper diagonal on the left side
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) {
            return false;
        }
    }

    // Check lower diagonal on the left side
    for (let i = row, j = col; i < N && j >= 0; i++, j--) {
        if (board[i][j] === 1) {
            return false;
        }
    }

    return true;
}

/**
 * Utilizes backtracking to solve N-Queens problem.
 * 
 * @param {number[][]} board - The chessboard.
 * @param {number} col - The column from where to start the solution.
 * @returns {boolean} - True if solution exists, False otherwise.
 */
function solveNQueensUtil(board, col) {
    const N = board.length;

    // Base case: If all queens are placed, then return true
    if (col >= N) {
        return true;
    }

    // Consider this column and try placing a queen in all rows one by one
    for (let i = 0; i < N; i++) {
        if (isSafe(board, i, col)) {
            // Place queen
            board[i][col] = 1;

            // Recur to place rest of the queens
            if (solveNQueensUtil(board, col + 1)) {
                return true;  // A solution exists
            }

            // If no place is found, backtrack (remove queen)
            board[i][col] = 0;
        }
    }

    return false;  // No solution exists for this configuration
}

/**
 * Initializes the board and starts the process to solve the N-Queens puzzle.
 * 
 * @param {number} N - The number of queens.
 * @returns {number[][]} - Chessboard with queens placed, or null if no solution exists.
 */
function solveNQueens(N) {
    let board = Array.from({ length: N }, () => Array(N).fill(0));

    if (!solveNQueensUtil(board, 0)) {
        console.log("Solution does not exist");
        return null;
    }

    return board;
}

// Usage example:
const N = 4;
const solution = solveNQueens(N);

if (solution) {
    solution.forEach(row => {
        console.log(row.map(x => (x ? 'Q' : '.')).join(' '));
    });
}
