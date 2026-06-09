import { describe, it, expect } from "vitest";
import { uniquePaths } from "./solution";

describe("unique-paths", () => {
  const cases = [
    { args: [3, 7] as const, want: 28 },
    { args: [3, 2] as const, want: 3 },
  ];
  it.each(cases)("uniquePaths(%j)", ({ args, want }) => {
    expect(uniquePaths(...args)).toEqual(want);
  });
});
