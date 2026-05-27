import { describe, it, expect } from "vitest";
import { minFlips } from "./solution";

describe("minimum-flips-to-make-a-or-b-equal-to-c", () => {
  const cases = [
    { args: [2, 6, 5] as const, want: 3 },
    { args: [4, 2, 7] as const, want: 1 },
    { args: [1, 2, 3] as const, want: 0 },
  ];
  it.skip.each(cases)("minFlips(%j)", ({ args, want }) => {
    expect(minFlips(...args)).toEqual(want);
  });
});
