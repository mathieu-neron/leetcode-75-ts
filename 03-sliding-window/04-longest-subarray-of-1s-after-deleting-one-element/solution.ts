// LeetCode 1493: Longest Subarray Of 1s After Deleting One Element
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

export function longestSubarray(nums: number[]): number {
  let skipped = 0
  let max = 0
  let i = 0

  for (let j=0; j<nums.length; j++) {
    if (nums[j] === 0) skipped++

    while (skipped > 1) {
      if (nums[i++] === 0) skipped--
    }

    max = Math.max(max, j - i)
  }

  return max;
}

