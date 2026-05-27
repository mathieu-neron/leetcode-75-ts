import { describe, it, expect } from "vitest";
import { pivotIndex } from "./solution";

describe("find-pivot-index", () => {
  const cases = [
    { args: [[1, 7, 3, 6, 5, 6]] as const, want: 3 },
    { args: [[1, 2, 3]] as const, want: -1 },
  ];
  it.skip.each(cases)("pivotIndex(%j)", ({ args, want }) => {
    expect(pivotIndex(...args)).toEqual(want);
  });
});
