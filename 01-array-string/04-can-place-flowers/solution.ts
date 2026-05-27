// LeetCode 605: Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/

export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const f = flowerbed.length
  let i = 0

  while (i < f) {
    if (flowerbed[i] === 1) {
      i += 2
    } else if (i === f-1 || flowerbed[i + 1] === 0) {
      n--
      i += 2
    } else {
      i += 3
    }
  }

  return n <= 0;
}

