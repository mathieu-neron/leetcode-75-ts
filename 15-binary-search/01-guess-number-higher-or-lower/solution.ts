// LeetCode 374: Guess Number Higher Or Lower
// https://leetcode.com/problems/guess-number-higher-or-lower/

export function guessNumber(n: number): number {
  let left = 1;
  let right = n;

  while (left <= right) {
    // Use Math.floor and bitwise OR to avoid potential integer overflow
    const mid = Math.floor(left + (right - left) / 2);

    let res = guess(mid);

    if (res === 0) {
      return mid; // Exact match
    } else if (res === -1) {
      right = mid - 1; // Guess is too high, search the left half
    } else {
      left = mid + 1; // Guess is too low, search the right half
    }
  }

  return -1;
}

function guess(num: number): number {
  return 0;
}

