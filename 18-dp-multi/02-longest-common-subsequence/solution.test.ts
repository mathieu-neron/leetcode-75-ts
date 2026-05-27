import { describe, it, expect } from "vitest";
import { longestCommonSubsequence } from "./solution";

describe("longest-common-subsequence", () => {
  const cases = [
    { args: ["abcde", "ace"] as const, want: 3 },
    { args: ["abc", "abc"] as const, want: 3 },
    { args: ["abc", "def"] as const, want: 0 },
  ];
  it.skip.each(cases)("longestCommonSubsequence(%j)", ({ args, want }) => {
    expect(longestCommonSubsequence(...args)).toEqual(want);
  });
});
