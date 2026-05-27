import { describe, it, expect } from "vitest";
import { minEatingSpeed } from "./solution";

describe("koko-eating-bananas", () => {
  const cases = [
    { args: [[3, 6, 7, 11], 8] as const, want: 4 },
    { args: [[30, 11, 23, 4, 20], 5] as const, want: 30 },
    { args: [[30, 11, 23, 4, 20], 6] as const, want: 23 },
  ];
  it.skip.each(cases)("minEatingSpeed(%j)", ({ args, want }) => {
    expect(minEatingSpeed(...args)).toEqual(want);
  });
});
