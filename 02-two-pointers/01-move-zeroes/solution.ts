// LeetCode 283: Move Zeroes
// https://leetcode.com/problems/move-zeroes/

export function moveZeroes(nums: number[]): void {
    let idx = 0

    for (const num of nums) {
        if (num === 0) continue;
        nums[idx++] = num
    }

    nums.fill(0, idx)
}

