import { describe, it, expect } from "vitest";
import { mergeAlternately } from "./solution";

describe("merge-strings-alternately", () => {
  const cases = [
    { args: ["abc", "pqr"] as const, want: "apbqcr" },
    { args: ["ab", "pqrs"] as const, want: "apbqrs" },
    { args: ["abcd", "pq"] as const, want: "apbqcd" },
    { args: ["", "xyz"] as const, want: "xyz" },
    { args: ["xyz", ""] as const, want: "xyz" },
  ];
  it.each(cases)("mergeAlternately(%j)", ({ args, want }) => {
    expect(mergeAlternately(...args)).toEqual(want);
  });
});
