import { describe, it, expect } from "vitest";
import { increasingTriplet } from "./solution";

describe("increasing-triplet-subsequence", () => {
  const cases = [
    { args: [[1, 2, 3, 4, 5]] as const, want: true },
    { args: [[5, 4, 3, 2, 1]] as const, want: false },
    { args: [[2, 1, 5, 0, 4, 6]] as const, want: true },
  ];
  it.each(cases)("increasingTriplet(%j)", ({ args, want }) => {
    expect(increasingTriplet(...args)).toEqual(want);
  });
});
