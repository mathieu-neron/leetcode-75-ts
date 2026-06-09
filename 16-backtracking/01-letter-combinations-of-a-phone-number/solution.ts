// LeetCode 17: Letter Combinations Of A Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

export function letterCombinations(digits: string): string[] {
  const map = new Map<string, string>();
  map.set('2', 'abc');
  map.set('3', 'def');
  map.set('4', 'ghi');
  map.set('5', 'jkl');
  map.set('6', 'mno');
  map.set('7', 'pqrs');
  map.set('8', 'tuv');
  map.set('9', 'wxyz');

  const result: string[] = [];

  function backtrack(remain: string, current: string) {
    if (!remain) {
      if (current) result.push(current);
      return;
    }

    for (const c of map.get(remain.charAt(0)) ?? '') {
      backtrack(remain.substring(1), current + c);
    }
  }

  backtrack(digits, '');


  return result;
}

