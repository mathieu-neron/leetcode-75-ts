import { describe, it, expect } from "vitest";
import { numTilings } from "./solution";

describe("domino-and-tromino-tiling", () => {
  const cases = [
    { args: [3] as const, want: 5 },
    { args: [1] as const, want: 1 },
  ];
  it.skip.each(cases)("numTilings(%j)", ({ args, want }) => {
    expect(numTilings(...args)).toEqual(want);
  });
});
