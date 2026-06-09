import { describe, it, expect } from "vitest";
import { tribonacci } from "./solution";

describe("n-th-tribonacci-number", () => {
  const cases = [
    { args: [4] as const, want: 4 },
    { args: [25] as const, want: 1389537 },
  ];
  it.each(cases)("tribonacci(%j)", ({ args, want }) => {
    expect(tribonacci(...args)).toEqual(want);
  });
});
