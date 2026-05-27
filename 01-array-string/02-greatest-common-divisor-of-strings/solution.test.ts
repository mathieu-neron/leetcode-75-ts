import { describe, it, expect } from "vitest";
import { gcdOfStrings } from "./solution";

describe("greatest-common-divisor-of-strings", () => {
  const cases = [
    { args: ["ABCABC", "ABC"] as const, want: "ABC" },
    { args: ["ABABAB", "ABAB"] as const, want: "AB" },
    { args: ["LEET", "CODE"] as const, want: "" },
  ];
  it.each(cases)("gcdOfStrings(%j)", ({ args, want }) => {
    expect(gcdOfStrings(...args)).toEqual(want);
  });
});
