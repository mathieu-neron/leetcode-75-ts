import { describe, it, expect } from "vitest";
import { kidsWithCandies } from "./solution";

describe("kids-with-the-greatest-number-of-candies", () => {
  const cases = [
    { args: [[2, 3, 5, 1, 3], 3] as const, want: [true, true, true, false, true] },
    { args: [[4, 2, 1, 1, 2], 1] as const, want: [true, false, false, false, false] },
  ];
  it.each(cases)("kidsWithCandies(%j)", ({ args, want }) => {
    expect(kidsWithCandies(...args)).toEqual(want);
  });
});
