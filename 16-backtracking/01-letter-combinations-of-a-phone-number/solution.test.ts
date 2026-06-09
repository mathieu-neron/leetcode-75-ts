import { describe, it, expect } from "vitest";
import { letterCombinations } from "./solution";

describe("letter-combinations-of-a-phone-number", () => {
  const cases = [
    { args: ["23"] as const, want: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] },
    { args: [""] as const, want: [] },
    { args: ["2"] as const, want: ["a", "b", "c"] },
  ];
  it.each(cases)("letterCombinations(%j)", ({ args, want }) => {
    expect([...letterCombinations(...args)].sort()).toEqual([...want].sort());
  });
});
