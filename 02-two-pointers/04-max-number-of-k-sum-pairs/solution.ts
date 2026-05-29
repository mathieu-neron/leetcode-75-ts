// LeetCode 1679: Max Number Of K Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs/

export function maxOperations(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  let total = 0;

  for (const num of nums){
    const comp = k - num;
    if ((freq.get(comp) ?? 0) > 0){
      total++;
      freq.set(comp, freq.get(comp)! - 1)
    } else {
      freq.set(num, (freq.get(num) ?? 0) + 1)
    }
  }

  return total
}

export function maxOperationsMap(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  let result = 0;
  for (const num of nums) {
    // num + comp = k
    // comp = k - num
    const comp = k - num;
    if ((freq.get(num) ?? 0) === 0) continue;
    if ((freq.get(comp) ?? 0) === 0) continue;
    if (num === comp && freq.get(num)! < 2) continue;

    result++;
    freq.set(num, freq.get(num)! - 1);
    if (freq.get(num) === 0) freq.delete(num);

    freq.set(comp, freq.get(comp)! - 1);
    if (freq.get(comp) === 0) freq.delete(comp);
  }

  return result;
}

export function maxOperationsSort(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  let i = 0
  let j = nums.length - 1

  let result = 0

  while (i < j) {
    const lo = nums[i]
    const hi = nums[j]
    const sum = lo + hi

    if (sum == k) {
      result++
      i++
      j--
    } else if (sum < k) {
      i++
    } else {
      j--
    }
  }

  return result
}

