import { describe, it, expect } from "vitest";
import { combinationSum3 } from "./solution";

describe("combination-sum-iii", () => {
  const cases = [
    { args: [3, 7] as const, want: [[1, 2, 4]] },
    { args: [3, 9] as const, want: [[1, 2, 6], [1, 3, 5], [2, 3, 4]] },
    { args: [4, 1] as const, want: [] },
  ];
  it.skip.each(cases)("combinationSum3(%j)", ({ args, want }) => {
    expect(combinationSum3(...args)).toEqual(want);
  });
});
