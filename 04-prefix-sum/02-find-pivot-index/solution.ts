// LeetCode 724: Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/

export function pivotIndex(nums: number[]): number {
  const n = nums.length;
  let sum = 0;
  const pre = nums.map(num => sum += num);
  sum = 0;
  const post = [...nums].reverse().map(num => sum += num).reverse();


  for (let i=0; i<n; i++) {
    const left = pre[i] - nums[i];
    const right = post[i] - nums[i];
    if (left === right) return i;
  }

  return -1;
}

