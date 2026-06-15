// LeetCode 547: Number Of Provinces
// https://leetcode.com/problems/number-of-provinces/

export function findCircleNumBfs(isConnected: number[][]): number {
  const n = isConnected.length;
  const visited: boolean[] = new Array(n).fill(false);
  const q: number[] = [];
  let idx = 0;
  let count = 0;

  for (let i=0; i<n; i++) {
    if (!visited[i]) {
      q.push(i);
      while (idx < q.length) {
        const s = q[idx++];
        visited[s] = true;
        for (let j = 0; j<n; j++) {
          if (isConnected[s][j] == 1 && !visited[j]) {
            q.push(j);
          }
        }
      }
      count++;
    }
  }
  return count;
}

export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const visited = new Set<number>();
  let count = 0;

  function dfs(i: number) {
    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        visited.add(j);
        dfs(j);
      }
    }
  }

  for (let i = 0; i<n; i++) {
    if (!visited.has(i)) {
      count++;
      visited.add(i);
      dfs(i);
    }
  }

  return count;
}

