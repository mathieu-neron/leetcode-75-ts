import { describe, it, expect } from "vitest";
import { findMaxAverage } from "./solution";

describe("maximum-average-subarray-i", () => {
  const cases = [
    { args: [[1, 12, -5, -6, 50, 3], 4] as const, want: 12.75 },
    { args: [[5], 1] as const, want: 5 },
  ];
  it.each(cases)("findMaxAverage(%j)", ({ args, want }) => {
    expect(findMaxAverage(...args)).toEqual(want);
  });
});
