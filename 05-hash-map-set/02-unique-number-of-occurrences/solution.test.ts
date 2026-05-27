import { describe, it, expect } from "vitest";
import { uniqueOccurrences } from "./solution";

describe("unique-number-of-occurrences", () => {
  const cases = [
    { args: [[1, 2, 2, 1, 1, 3]] as const, want: true },
    { args: [[1, 2]] as const, want: false },
  ];
  it.skip.each(cases)("uniqueOccurrences(%j)", ({ args, want }) => {
    expect(uniqueOccurrences(...args)).toEqual(want);
  });
});
