import { describe, it, expect } from "vitest";
import { findDifference } from "./solution";

describe("find-the-difference-of-two-arrays", () => {
  const cases = [
    { args: [[1, 2, 3], [2, 4, 6]] as const, want: [[1, 3], [4, 6]] },
    { args: [[1, 2, 3, 3], [1, 1, 2, 2]] as const, want: [[3], []] },
  ];
  it.skip.each(cases)("findDifference(%j)", ({ args, want }) => {
    expect(findDifference(...args)).toEqual(want);
  });
});
