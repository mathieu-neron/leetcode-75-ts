import { describe, it, expect } from "vitest";
import { findMinArrowShots } from "./solution";

describe("minimum-number-of-arrows-to-burst-balloons", () => {
  const cases = [
    { args: [[[10, 16], [2, 8], [1, 6], [7, 12]]] as const, want: 2 },
    { args: [[[1, 2], [3, 4], [5, 6], [7, 8]]] as const, want: 4 },
  ];
  it.skip.each(cases)("findMinArrowShots(%j)", ({ args, want }) => {
    expect(findMinArrowShots(...args)).toEqual(want);
  });
});
