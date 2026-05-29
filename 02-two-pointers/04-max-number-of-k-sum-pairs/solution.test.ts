import { describe, it, expect } from "vitest";
import { maxOperations } from "./solution";

describe("max-number-of-k-sum-pairs", () => {
  const cases = [
    { args: [[1, 2, 3, 4], 5] as const, want: 2 },
    { args: [[3, 1, 3, 4, 3], 6] as const, want: 1 },
  ];
  it.each(cases)("maxOperations(%j)", ({ args, want }) => {
    expect(maxOperations(...args)).toEqual(want);
  });
});
