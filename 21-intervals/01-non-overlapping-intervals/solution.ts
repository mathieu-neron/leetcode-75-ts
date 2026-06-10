// LeetCode 435: Non Overlapping Intervals
// https://leetcode.com/problems/non-overlapping-intervals/

export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a: number[], b: number[]) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  let result = 0;
  let prev = intervals[0];

  for (let i=1; i<intervals.length; i++) {
    const curr = intervals[i];
    if (prev[1] > curr[0]) {
      result++;
      prev = prev[1] > curr[1] ? curr : prev;
    } else {
      prev = curr;
    }
  }

  return result;
}

