import { describe, it, expect } from "vitest";
import { longestSubarray } from "./solution";

describe("longest-subarray-of-1s-after-deleting-one-element", () => {
  const cases = [
    { args: [[1, 1, 0, 1]] as const, want: 3 },
    { args: [[0, 1, 1, 1, 0, 1, 1, 0, 1]] as const, want: 5 },
    { args: [[1, 1, 1]] as const, want: 2 },
  ];
  it.each(cases)("longestSubarray(%j)", ({ args, want }) => {
    expect(longestSubarray(...args)).toEqual(want);
  });
});
