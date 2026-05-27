// LeetCode 151: Reverse Words In A String
// https://leetcode.com/problems/reverse-words-in-a-string/

export function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(" ")
}

