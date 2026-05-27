import { describe, it, expect } from "vitest";
import { canPlaceFlowers } from "./solution";

describe("can-place-flowers", () => {
  const cases = [
    { args: [[1, 0, 0, 0, 1], 1] as const, want: true },
    { args: [[1, 0, 0, 0, 1], 2] as const, want: false },
  ];
  it.each(cases)("canPlaceFlowers(%j)", ({ args, want }) => {
    expect(canPlaceFlowers(...args)).toEqual(want);
  });
});
