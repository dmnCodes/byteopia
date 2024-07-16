export const minCostPath = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  // Create a 2D dp array with the same dimensions as the grid
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // Initialize the top-left corner
  dp[0][0] = grid[0][0];

  // Fill the first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // Fill the first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // Fill the rest of the dp array
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  // The minimum cost to reach the bottom-right corner
  return dp[m - 1][n - 1];
}
