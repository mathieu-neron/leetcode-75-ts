// LeetCode 2215: Find The Difference Of Two Arrays
// https://leetcode.com/problems/find-the-difference-of-two-arrays/

export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set<number>(nums1);
  const set2 = new Set<number>(nums2);

  for (const num of set1) {
    if (set2.has(num)) {
      set1.delete(num)
      set2.delete(num)
    }
  }

  return [[...set1], [...set2]];
}

