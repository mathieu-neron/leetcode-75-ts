// LeetCode 735: Asteroid Collision
// https://leetcode.com/problems/asteroid-collision/

export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = [];


  for (const asteroid of asteroids) {
    if (asteroid < 0) {
      while (stack.length !== 0 && stack[stack.length - 1] < Math.abs(asteroid)) {
        stack.pop();
      }

      if (stack.length === 0) result.push(asteroid);
      if (stack.length !== 0 && stack[stack.length - 1] === Math.abs(asteroid)) stack.pop();
    } else {
      stack.push(asteroid);
    }
  }

  result.push(...stack);

  return result;
}

