import { describe, it, expect } from "vitest";
import { findPeakElement } from "./solution";

describe("find-peak-element", () => {
  const cases = [
    { args: [[1, 2, 3, 1]] as const, want: 2 },
    { args: [[1, 2, 1, 3, 5, 6, 4]] as const, want: 5 },
  ];
  it.skip.each(cases)("findPeakElement(%j)", ({ args, want }) => {
    expect(findPeakElement(...args)).toEqual(want);
  });
});
