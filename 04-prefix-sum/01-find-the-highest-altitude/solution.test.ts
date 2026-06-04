import { describe, it, expect } from "vitest";
import { largestAltitude } from "./solution";

describe("find-the-highest-altitude", () => {
  const cases = [
    { args: [[-5, 1, 5, 0, -7]] as const, want: 1 },
    { args: [[-4, -3, -2, -1, 4, 3, 2]] as const, want: 0 },
  ];
  it.each(cases)("largestAltitude(%j)", ({ args, want }) => {
    expect(largestAltitude(...args)).toEqual(want);
  });
});
