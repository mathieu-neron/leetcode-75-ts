import { describe, it, expect } from "vitest";
import { canVisitAllRooms } from "./solution";

describe("keys-and-rooms", () => {
  const cases = [
    { args: [[[1], [2], [3], []]] as const, want: true },
    { args: [[[1, 3], [3, 0, 1], [2], [0]]] as const, want: false },
  ];
  it.each(cases)("canVisitAllRooms(%j)", ({ args, want }) => {
    expect(canVisitAllRooms(...args)).toEqual(want);
  });
});
