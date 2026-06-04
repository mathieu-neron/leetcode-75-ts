import { describe, it, expect } from "vitest";
import { removeStars } from "./solution";

describe("removing-stars-from-a-string", () => {
  const cases = [
    { args: ["leet**cod*e"] as const, want: "lecoe" },
    { args: ["erase*****"] as const, want: "" },
  ];
  it.each(cases)("removeStars(%j)", ({ args, want }) => {
    expect(removeStars(...args)).toEqual(want);
  });
});
