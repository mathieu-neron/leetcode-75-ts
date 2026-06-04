// LeetCode 1207: Unique Number Of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences/

export function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();

  for (const num of arr) {
    const count = map.get(num) ?? 0;
    map.set(num, count + 1)
  }

  const set = new Set<number>();

  for (const count of map.values()) {
    if (set.has(count)) return false;
    set.add(count);
  }

  return true;
}

