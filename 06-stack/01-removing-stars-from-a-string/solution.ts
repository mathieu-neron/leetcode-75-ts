// LeetCode 2390: Removing Stars From A String
// https://leetcode.com/problems/removing-stars-from-a-string/

export function removeStars(s: string): string {
  const stack: string[] = [];
  const chars = [...s];

  for (const char of chars) {
    if (char === '*') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}

