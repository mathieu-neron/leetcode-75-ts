// LeetCode 1768: Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/

export function mergeAlternately(word1: string, word2: string): string {
  let i = 0, j = 0;
  const parts: string[] = [];
  while (i < word1.length && j < word2.length) {
    parts.push(word1[i++]);
    parts.push(word2[j++]);
  }
  parts.push(word1.slice(i));
  parts.push(word2.slice(j));
  return parts.join("");
}

