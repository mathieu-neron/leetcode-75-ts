// LeetCode 1657: Determine If Two Strings Are Close
// https://leetcode.com/problems/determine-if-two-strings-are-close/

export function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (const c of word1) map1.set(c, (map1.get(c) ?? 0) + 1);
  for (const c of word2) map2.set(c, (map2.get(c) ?? 0) + 1);

  if (map1.size !== map2.size) return false;

  const count1 = new Map<number, number>();
  const count2 = new Map<number, number>();

  for (const [k, v] of map1) {
    if (!map2.has(k)) return false;                        // key-set check folded in
    count1.set(v, (count1.get(v) ?? 0) + 1);
  }

  for (const v of map2.values()) {
    count2.set(v, (count2.get(v) ?? 0) + 1);
  }

  if (count1.size !== count2.size) return false;           // fast-fail

  for (const [k, v] of count1) {
    if (count2.get(k) !== v) return false;
  }

  return true;
}

