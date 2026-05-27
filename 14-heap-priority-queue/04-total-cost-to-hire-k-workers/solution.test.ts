import { describe, it, expect } from "vitest";
import { totalCost } from "./solution";

describe("total-cost-to-hire-k-workers", () => {
  const cases = [
    { args: [[17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4] as const, want: 11 },
    { args: [[1, 2, 4, 1], 3, 3] as const, want: 4 },
  ];
  it.skip.each(cases)("totalCost(%j)", ({ args, want }) => {
    expect(totalCost(...args)).toEqual(want);
  });
});
