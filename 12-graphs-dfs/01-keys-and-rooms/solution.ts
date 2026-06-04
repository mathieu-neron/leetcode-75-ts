// LeetCode 841: Keys And Rooms
// https://leetcode.com/problems/keys-and-rooms/

export function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set<number>([0]);

  function dfs(room: number) {
    visited.add(room);
    for (const key of rooms[room]) {
      if (visited.has(key)) continue;
      dfs(key);
    }
  }

  dfs(0);

  return visited.size === rooms.length;
}

export function canVisitAllRoomsBfs(rooms: number[][]): boolean {
  const visited = new Set<number>([0]);
  const queue = rooms[0];

  while (queue.length !== 0) {
    const room = queue.shift() as number;

    if (visited.has(room)) continue;

    for (const key of rooms[room]) {
      if (visited.has(key)) continue;
      queue.push(key);
    }

    visited.add(room);
  }

  return visited.size === rooms.length;
}

