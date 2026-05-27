// LeetCode 1071: Greatest Common Divisor Of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/

export function gcdOfStrings(str1: string, str2: string): string {
  if (str1.length < str2.length) return gcdOfStrings(str2, str1)
  if (!str2) return str1
  if (!str1.startsWith(str2)) return ""
  return gcdOfStrings(str1.substring(str2.length), str2)
}

