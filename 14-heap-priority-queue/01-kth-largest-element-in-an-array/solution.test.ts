import { describe, it, expect } from "vitest";
import { findKthLargest } from "./solution";

describe("kth-largest-element-in-an-array", () => {
  const cases = [
    { args: [[3, 2, 1, 5, 6, 4], 2] as const, want: 5 },
    { args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4] as const, want: 4 },
  ];
  it.skip.each(cases)("findKthLargest(%j)", ({ args, want }) => {
    expect(findKthLargest(...args)).toEqual(want);
  });
});
