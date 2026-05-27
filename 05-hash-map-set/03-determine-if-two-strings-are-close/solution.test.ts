import { describe, it, expect } from "vitest";
import { closeStrings } from "./solution";

describe("determine-if-two-strings-are-close", () => {
  const cases = [
    { args: ["abc", "bca"] as const, want: true },
    { args: ["a", "aa"] as const, want: false },
    { args: ["cabbba", "abbccc"] as const, want: true },
  ];
  it.skip.each(cases)("closeStrings(%j)", ({ args, want }) => {
    expect(closeStrings(...args)).toEqual(want);
  });
});
