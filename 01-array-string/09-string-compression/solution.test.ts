import { describe, it, expect } from "vitest";
import { compress } from "./solution";

describe("string-compression", () => {
  const cases = [
    { args: [["a","a","b","b","c","c","c"]] as const, want: 6 },
    { args: [["a"]] as const, want: 1 },
  ];
  it.each(cases)("compress(%j)", ({ args, want }) => {
    expect(compress(...args)).toEqual(want);
  });
});
