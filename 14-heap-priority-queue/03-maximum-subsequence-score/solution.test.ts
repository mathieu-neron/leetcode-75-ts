import { describe, it, expect } from "vitest";
import { maxScore } from "./solution";

describe("maximum-subsequence-score", () => {
  const cases = [
    { args: [[1, 3, 3, 2], [2, 1, 3, 4], 3] as const, want: 12 },
    { args: [[4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1] as const, want: 30 },
  ];
  it.skip.each(cases)("maxScore(%j)", ({ args, want }) => {
    expect(maxScore(...args)).toEqual(want);
  });
});
