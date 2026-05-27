import { describe, it, expect } from "vitest";
import { predictPartyVictory } from "./solution";

describe("dota2-senate", () => {
  const cases = [
    { args: ["RD"] as const, want: "Radiant" },
    { args: ["RDD"] as const, want: "Dire" },
  ];
  it.skip.each(cases)("predictPartyVictory(%j)", ({ args, want }) => {
    expect(predictPartyVictory(...args)).toEqual(want);
  });
});
