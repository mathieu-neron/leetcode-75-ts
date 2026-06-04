// LeetCode 1732: Find The Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/

export function largestAltitude(gain: number[]): number {
  let pre = 0
  let max = 0
  for (let g of gain) {
    pre += g
    max = Math.max(max, pre)
  }
  return max;
}

