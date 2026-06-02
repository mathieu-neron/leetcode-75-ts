import { describe, it, expect } from "vitest";
import { maxVowels } from "./solution";

describe("maximum-number-of-vowels-in-a-substring-of-given-length", () => {
  const cases = [
    { args: ["abciiidef", 3] as const, want: 3 },
    { args: ["aeiou", 2] as const, want: 2 },
  ];
  it.each(cases)("maxVowels(%j)", ({ args, want }) => {
    expect(maxVowels(...args)).toEqual(want);
  });
});
