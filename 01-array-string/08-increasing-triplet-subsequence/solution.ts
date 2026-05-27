// LeetCode 334: Increasing Triplet Subsequence
// https://leetcode.com/problems/increasing-triplet-subsequence/

export function increasingTriplet(nums: number[]): boolean {
  let min1 = Number.MAX_SAFE_INTEGER
  let min2 = Number.MAX_SAFE_INTEGER

  for (const num of nums) {
    if (num <= min1) min1 = num
    else if (num <= min2) min2 = num
    else return true
  }
  return false;
}

