// LeetCode 739: Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/

export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const n = temperatures.length;
  const result: number[] = new Array(n).fill(0);

  for (let i=0; i<n; i++) {
    const temperature = temperatures[i];
    while (stack.length !== 0 && temperatures[stack[stack.length - 1]] < temperature) {
      const idx = stack.pop() as number;
      result[idx] = i - idx;
    }
    stack.push(i);
  }

  return result;
}

