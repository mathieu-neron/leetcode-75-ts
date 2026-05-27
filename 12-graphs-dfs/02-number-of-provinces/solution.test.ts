import { describe, it, expect } from "vitest";
import { findCircleNum } from "./solution";

describe("number-of-provinces", () => {
  const cases = [
    { args: [[[1, 1, 0], [1, 1, 0], [0, 0, 1]]] as const, want: 2 },
    { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]] as const, want: 3 },
  ];
  it.skip.each(cases)("findCircleNum(%j)", ({ args, want }) => {
    expect(findCircleNum(...args)).toEqual(want);
  });
});
