// LeetCode 62: Unique Paths
// https://leetcode.com/problems/unique-paths/

export function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m }, () => Array(n));
  dp[0].fill(1);
  dp.forEach(row => row[0] = 1);

  for (let i=1; i<m; i++) {
    for (let j=1; j<n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }


  return dp[m-1][n-1];
}

