// LeetCode 392: Is Subsequence
// https://leetcode.com/problems/is-subsequence/

export function isSubsequence(s: string, t: string): boolean {
  let idx1 = 0;
  let idx2 = 0;

  while(idx1 < s.length && idx2 < t.length) {
    if(s[idx1] === t[idx2]) {
      idx1++;
    }
    idx2++;
  }

  return idx1 == s.length;
}

