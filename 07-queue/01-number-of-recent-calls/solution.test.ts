import { describe, it, expect } from "vitest";
import { RecentCounter } from "./solution";

describe("number-of-recent-calls", () => {
  it("example 1: ping sequence [1, 100, 3001, 3002] -> [1, 2, 3, 3]", () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(100)).toBe(2);
    expect(counter.ping(3001)).toBe(3);
    expect(counter.ping(3002)).toBe(3);
  });
});
