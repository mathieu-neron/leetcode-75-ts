// LeetCode 1926: Nearest Exit From Entrance In Maze
// https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/

export function nearestExit(maze: string[][], entrance: number[]): number {
  const m = maze.length;
  const n = maze[0].length;
  const [er, ec] = entrance;

  const isExit = (r: number, c: number) =>
      (r === 0 || r === m - 1 || c === 0 || c === n - 1) && !(r === er && c === ec);

  const visited = new Set<string>([`${er},${ec}`]);
  let queue: [number, number][] = [[er, ec]];
  let steps = 0;

  while (queue.length > 0) {
    const next: [number, number][] = [];
    steps++;

    for (const [r, c] of queue) {
      for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
        if (maze[nr][nc] === '+') continue;
        if (visited.has(`${nr},${nc}`)) continue;
        if (isExit(nr, nc)) return steps;
        visited.add(`${nr},${nc}`);
        next.push([nr, nc]);
      }
    }

    queue = next;
  }

  return -1;
}

