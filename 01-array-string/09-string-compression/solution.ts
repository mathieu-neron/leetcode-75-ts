// LeetCode 443: String Compression
// https://leetcode.com/problems/string-compression/

export function compress(chars: string[]): number {
  let ans = 0
  let i = 0
  while (i < chars.length) {
    const char = chars[i]
    let count = 0
    while (i < chars.length && chars[i] === char) {
      i++
      count++
    }

    chars[ans++] = char
    if (count !== 1) {
      for (const digit of count.toString()) {
        chars[ans++] = digit
      }
    }
  }
  return ans;
}

