import { describe, it, expect } from "vitest";
import { reverseVowels } from "./solution";

describe("reverse-vowels-of-a-string", () => {
  const cases = [
    { args: ["IceCreAm"] as const, want: "AceCreIm" },
    { args: ["leetcode"] as const, want: "leotcede" },
  ];
  it.each(cases)("reverseVowels(%j)", ({ args, want }) => {
    expect(reverseVowels(...args)).toEqual(want);
  });
});
