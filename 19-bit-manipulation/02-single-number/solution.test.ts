import { describe, it, expect } from "vitest";
import { singleNumber } from "./solution";

describe("single-number", () => {
  const cases = [
    { args: [[2, 2, 1]] as const, want: 1 },
    { args: [[4, 1, 2, 1, 2]] as const, want: 4 },
  ];
  it.skip.each(cases)("singleNumber(%j)", ({ args, want }) => {
    expect(singleNumber(...args)).toEqual(want);
  });
});
