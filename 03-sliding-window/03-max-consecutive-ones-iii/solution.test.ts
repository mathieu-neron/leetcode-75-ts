import { describe, it, expect } from "vitest";
import { longestOnes } from "./solution";

describe("max-consecutive-ones-iii", () => {
  const cases = [
    { args: [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2] as const, want: 6 },
    { args: [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3] as const, want: 10 },
  ];
  it.skip.each(cases)("longestOnes(%j)", ({ args, want }) => {
    expect(longestOnes(...args)).toEqual(want);
  });
});
