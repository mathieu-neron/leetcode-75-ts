import { describe, it, expect } from "vitest";
import { countBits } from "./solution";

describe("counting-bits", () => {
  const cases = [
    { args: [2] as const, want: [0, 1, 1] },
    { args: [5] as const, want: [0, 1, 1, 2, 1, 2] },
  ];
  it.skip.each(cases)("countBits(%j)", ({ args, want }) => {
    expect(countBits(...args)).toEqual(want);
  });
});
