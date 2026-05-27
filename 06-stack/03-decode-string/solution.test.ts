import { describe, it, expect } from "vitest";
import { decodeString } from "./solution";

describe("decode-string", () => {
  const cases = [
    { args: ["3[a]2[bc]"] as const, want: "aaabcbc" },
    { args: ["3[a2[c]]"] as const, want: "accaccacc" },
    { args: ["2[abc]3[cd]ef"] as const, want: "abcabccdcdcdef" },
  ];
  it.skip.each(cases)("decodeString(%j)", ({ args, want }) => {
    expect(decodeString(...args)).toEqual(want);
  });
});
