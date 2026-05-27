import { describe, it, expect } from "vitest";
import { minReorder } from "./solution";

describe("reorder-routes-to-make-all-paths-lead-to-the-city-zero", () => {
  const cases = [
    { args: [6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]] as const, want: 3 },
    { args: [5, [[1, 0], [1, 2], [3, 2], [3, 4]]] as const, want: 2 },
  ];
  it.skip.each(cases)("minReorder(%j)", ({ args, want }) => {
    expect(minReorder(...args)).toEqual(want);
  });
});
