import { describe, it, expect } from "vitest";
import { orangesRotting } from "./solution";

describe("rotting-oranges", () => {
  const cases = [
    { args: [[[2, 1, 1], [1, 1, 0], [0, 1, 1]]] as const, want: 4 },
    { args: [[[2, 1, 1], [0, 1, 1], [1, 0, 1]]] as const, want: -1 },
    { args: [[[0, 2]]] as const, want: 0 },
  ];
  it.skip.each(cases)("orangesRotting(%j)", ({ args, want }) => {
    expect(orangesRotting(...args)).toEqual(want);
  });
});
