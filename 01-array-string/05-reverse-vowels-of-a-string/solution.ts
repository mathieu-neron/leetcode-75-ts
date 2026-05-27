// LeetCode 345: Reverse Vowels Of A String
// https://leetcode.com/problems/reverse-vowels-of-a-string/

export function reverseVowels(s: string): string {
  const arr = s.split('');
  let i = 0
  let j = s.length - 1

  while (i < j) {
    if (!isVowel(s.charAt(i))) {
      i++
      continue
    }
    if (!isVowel(s.charAt(j))) {
      j--
      continue
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++
    j--
  }
  return arr.join('');
}

function isVowel(char: string): boolean {
  const c = char.toLowerCase()
  return c === 'a' || c === 'e'|| c === 'i' || c === 'o' || c === 'u'
}

