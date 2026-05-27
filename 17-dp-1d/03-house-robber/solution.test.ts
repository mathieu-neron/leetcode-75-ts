import { describe, it, expect } from "vitest";
import { rob } from "./solution";

describe("house-robber", () => {
  const cases = [
    { args: [[1, 2, 3, 1]] as const, want: 4 },
    { args: [[2, 7, 9, 3, 1]] as const, want: 12 },
  ];
  it.skip.each(cases)("rob(%j)", ({ args, want }) => {
    expect(rob(...args)).toEqual(want);
  });
});
