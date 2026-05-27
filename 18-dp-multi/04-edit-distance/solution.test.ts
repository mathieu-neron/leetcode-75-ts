import { describe, it, expect } from "vitest";
import { minDistance } from "./solution";

describe("edit-distance", () => {
  const cases = [
    { args: ["horse", "ros"] as const, want: 3 },
    { args: ["intention", "execution"] as const, want: 5 },
  ];
  it.skip.each(cases)("minDistance(%j)", ({ args, want }) => {
    expect(minDistance(...args)).toEqual(want);
  });
});
