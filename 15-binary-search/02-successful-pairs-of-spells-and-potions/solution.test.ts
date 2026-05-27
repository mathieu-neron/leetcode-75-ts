import { describe, it, expect } from "vitest";
import { successfulPairs } from "./solution";

describe("successful-pairs-of-spells-and-potions", () => {
  const cases = [
    { args: [[5, 1, 3], [1, 2, 3, 4, 5], 7] as const, want: [4, 0, 3] },
    { args: [[3, 1, 2], [8, 5, 8], 16] as const, want: [2, 0, 2] },
  ];
  it.skip.each(cases)("successfulPairs(%j)", ({ args, want }) => {
    expect(successfulPairs(...args)).toEqual(want);
  });
});
