// LeetCode 1004: Max Consecutive Ones Iii
// https://leetcode.com/problems/max-consecutive-ones-iii/

export function longestOnes(nums: number[], k: number): number {
  let flipped = 0
  let max = k
  let i = 0

  for (let j = 0; j<nums.length; j++) {
    const num = nums[j]
    if (num === 1) {
      max = Math.max(max, j - i + 1)
      continue
    }
    while (flipped === k) {
      if (nums[i++] === 0) flipped--
    }

    flipped++
    max = Math.max(max, j - i + 1)
  }

  return max;
}

