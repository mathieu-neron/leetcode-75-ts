// LeetCode 1431: Kids With The Greatest Number Of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const n = candies.length
  const max = Math.max(...candies)
  let result = []

  for (const candy of candies) {
    result.push((candy + extraCandies >= max))
  }

  return result
}

