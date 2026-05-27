import { describe, it, expect } from "vitest";
import { maxProfit } from "./solution";

describe("best-time-to-buy-and-sell-stock-with-transaction-fee", () => {
  const cases = [
    { args: [[1, 3, 2, 8, 4, 9], 2] as const, want: 8 },
    { args: [[1, 3, 7, 5, 10, 3], 3] as const, want: 6 },
  ];
  it.skip.each(cases)("maxProfit(%j)", ({ args, want }) => {
    expect(maxProfit(...args)).toEqual(want);
  });
});
