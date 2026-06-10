import { describe, it, expect } from "vitest";
import { dailyTemperatures } from "./solution";

describe("daily-temperatures", () => {
  const cases = [
    { args: [[73, 74, 75, 71, 69, 72, 76, 73]] as const, want: [1, 1, 4, 2, 1, 1, 0, 0] },
    { args: [[30, 40, 50, 60]] as const, want: [1, 1, 1, 0] },
  ];
  it.each(cases)("dailyTemperatures(%j)", ({ args, want }) => {
    expect(dailyTemperatures(...args)).toEqual(want);
  });
});
