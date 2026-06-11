import { describe, it, expect } from "vitest";
import { asteroidCollision } from "./solution";

describe("asteroid-collision", () => {
  const cases = [
    { args: [[5, 10, -5]] as const, want: [5, 10] },
    { args: [[8, -8]] as const, want: [] },
    { args: [[10, 2, -5]] as const, want: [10] },
  ];
  it.each(cases)("asteroidCollision(%j)", ({ args, want }) => {
    expect(asteroidCollision(...args)).toEqual(want);
  });
});
