import { describe, it, expect } from "vitest";
import { equalPairs } from "./solution";

describe("equal-row-and-column-pairs", () => {
  const cases = [
    { args: [[[3, 2, 1], [1, 7, 6], [2, 7, 7]]] as const, want: 1 },
    { args: [[[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]] as const, want: 3 },
  ];
  it.skip.each(cases)("equalPairs(%j)", ({ args, want }) => {
    expect(equalPairs(...args)).toEqual(want);
  });
});
