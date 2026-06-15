// LeetCode 994: Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/

export function orangesRotting(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
  const q: number[][] = [];
  let fresh = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) q.push([i, j]);
      if (grid[i][j] === 1) fresh++;
    }
  }

  let minutes = 0;
  let idx = 0;

  while (idx < q.length && fresh > 0) {
    const size = q.length;
    while (idx < size) {
      const [x, y] = q[idx++];
      for (const [dx, dy] of dirs) {
        const xx = x + dx;
        const yy = y + dy;
        if (xx < 0 || xx >= m || yy < 0 || yy >= n) continue;
        if (grid[xx][yy] !== 1) continue; // skip non-fresh
        grid[xx][yy] = 2; // mark rotten (acts as visited)
        fresh--;
        q.push([xx, yy]);
      }
    }
    minutes++;
  }

  return fresh === 0 ? minutes : -1;
}

