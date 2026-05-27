import { describe, it, expect } from "vitest";
import { productExceptSelf } from "./solution";

describe("product-of-array-except-self", () => {
  const cases = [
    { args: [[1, 2, 3, 4]] as const, want: [24, 12, 8, 6] },
    { args: [[-1, 1, 0, -3, 3]] as const, want: [0, 0, 9, 0, 0] },
  ];
  it.each(cases)("productExceptSelf(%j)", ({ args, want }) => {
    // `+ 0` normalizes -0 → +0 so vitest's toEqual treats them as equal
    expect(productExceptSelf(...args).map((x) => x + 0)).toEqual(want);
  });
});
