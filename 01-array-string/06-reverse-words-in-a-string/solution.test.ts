import { describe, it, expect } from "vitest";
import { reverseWords } from "./solution";

describe("reverse-words-in-a-string", () => {
  const cases = [
    { args: ["the sky is blue"] as const, want: "blue is sky the" },
    { args: ["  hello world  "] as const, want: "world hello" },
    { args: ["a good   example"] as const, want: "example good a" },
  ];
  it.each(cases)("reverseWords(%j)", ({ args, want }) => {
    expect(reverseWords(...args)).toEqual(want);
  });
});
