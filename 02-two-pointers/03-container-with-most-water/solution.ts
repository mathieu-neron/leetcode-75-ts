// LeetCode 11: Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

export function maxArea(height: number[]): number {
  let lo = 0
  let hi = height.length - 1
  let result = 0
  while (lo < hi) {
    const hLo = height[lo]
    const hHi = height[hi]
    const area = (hi - lo) * Math.min(hLo, hHi)
    result = Math.max(result, area)

    if (hLo > hHi) {
      hi--
    } else {
      lo++
    }
  }
  return result
}

