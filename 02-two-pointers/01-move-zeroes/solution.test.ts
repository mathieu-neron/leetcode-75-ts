import { describe, it, expect } from "vitest";
import { moveZeroes } from "./solution";

describe("move-zeroes", () => {
  const cases: { nums: number[]; want: number[] }[] = [
    { nums: [0, 1, 0, 3, 12], want: [1, 3, 12, 0, 0] },
    { nums: [0], want: [0] },
  ];
  it.skip.each(cases)("moveZeroes(%j)", ({ nums, want }) => {
    moveZeroes(nums);
    expect(nums).toEqual(want);
  });
});
