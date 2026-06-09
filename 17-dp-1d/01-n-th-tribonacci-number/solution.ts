// LeetCode 1137: N Th Tribonacci Number
// https://leetcode.com/problems/n-th-tribonacci-number/

export function tribonacci(n: number): number {
  if (n < 2) return n;
  let a = 0;
  let b = 1;
  let c = 1;

  for (let i=3; i<=n; i++) {
    const temp = c;
    c = a + b + c;
    a = b;
    b = temp;
  }

  return c;
}

