// LeetCode 238: Product Of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length
  let result: number[] = new Array(n)

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Right pass: multiply in product of all elements to the right
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result
}

