import { describe, it, expect } from "vitest";
import { eraseOverlapIntervals } from "./solution";

describe("non-overlapping-intervals", () => {
  const cases = [
    { args: [[[1, 2], [2, 3], [3, 4], [1, 3]]] as const, want: 1 },
    { args: [[[1, 2], [1, 2], [1, 2]]] as const, want: 2 },
    { args: [[[1, 2], [2, 3]]] as const, want: 0 },
  ];
  it.skip.each(cases)("eraseOverlapIntervals(%j)", ({ args, want }) => {
    expect(eraseOverlapIntervals(...args)).toEqual(want);
  });
});
