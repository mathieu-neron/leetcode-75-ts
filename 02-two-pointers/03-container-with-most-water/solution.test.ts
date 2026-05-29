import { describe, it, expect } from "vitest";
import { maxArea } from "./solution";

describe("container-with-most-water", () => {
  const cases = [
    { args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]] as const, want: 49 },
    { args: [[1, 1]] as const, want: 1 },
  ];
  it.each(cases)("maxArea(%j)", ({ args, want }) => {
    expect(maxArea(...args)).toEqual(want);
  });
});
