/**
 * Coin Change Problem using Dynamic Programming.
 */

/**
 * Returns the minimum number of coins that make up the amount.
 * If the amount can't be made up by any combination of the coins, it returns -1.
 *
 * @param {number[]} coins - Array of coin denominations.
 * @param {number} amount - Total amount.
 * @returns {number} - Minimum coins required to make up the amount or -1 if not possible.
 */
function coinChange(coins, amount) {
    // Initialize a DP array of length amount + 1.
    // Set every value to amount + 1 as a representation of infinity (or maximum coins possible).
    const dp = new Array(amount + 1).fill(amount + 1);
    
    // Base case: The minimum number of coins needed for amount 0 is 0.
    dp[0] = 0;
    
    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            // If the coin denomination is less than or equal to the current amount i,
            // update the dp array.
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    
    // If dp[amount] is still amount + 1, then it's not possible to make that amount with the given coins.
    return dp[amount] <= amount ? dp[amount] : -1;
}

// Usage example:
const coins = [1, 2, 5];
const amount = 11;

const result = coinChange(coins, amount);
if (result !== -1) {
    console.log(`Minimum coins required to make amount ${amount}: ${result}`);
} else {
    console.log(`Cannot make the desired amount with the given coins.`);
}
