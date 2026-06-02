// LeetCode 1456: Maximum Number Of Vowels In A Substring Of Given Length
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

export function maxVowels(s: string, k: number): number {
  let count = 0
  for (let i = 0; i<k; i++) {
    if (isVowel(s.charAt(i))) count++
  }
  let max = count
  if (max === k) return k

  for (let i=k; i<s.length; i++) {
    if (isVowel(s.charAt(i-k))) count--
    if (isVowel(s.charAt(i))) count++
    max = Math.max(max, count)
    if (max === k) return k
  }

  return max
}

function isVowel(c: string): boolean {
  return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'
}

