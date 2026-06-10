// LeetCode 338: Counting Bits
// https://leetcode.com/problems/counting-bits/

export function countBits(n: number): number[] {
  const result = new Array(n + 1);
  result[0] = 0;
  for (let i = 1; i<=n; i++) {
    result[i] = result[Math.floor(i/2)];
    if((i&1) == 1) result[i]++;
  }
  return result;
}

