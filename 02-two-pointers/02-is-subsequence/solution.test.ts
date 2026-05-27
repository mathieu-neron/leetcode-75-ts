import { describe, it, expect } from "vitest";
import { isSubsequence } from "./solution";

describe("is-subsequence", () => {
  const cases = [
    { args: ["abc", "ahbgdc"] as const, want: true },
    { args: ["axc", "ahbgdc"] as const, want: false },
  ];
  it.skip.each(cases)("isSubsequence(%j)", ({ args, want }) => {
    expect(isSubsequence(...args)).toEqual(want);
  });
});
