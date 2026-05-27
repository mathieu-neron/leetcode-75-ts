import { describe, it, expect } from "vitest";
import { minCostClimbingStairs } from "./solution";

describe("min-cost-climbing-stairs", () => {
  const cases = [
    { args: [[10, 15, 20]] as const, want: 15 },
    { args: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]] as const, want: 6 },
  ];
  it.skip.each(cases)("minCostClimbingStairs(%j)", ({ args, want }) => {
    expect(minCostClimbingStairs(...args)).toEqual(want);
  });
});
