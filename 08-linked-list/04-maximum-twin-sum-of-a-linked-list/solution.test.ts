import { describe, it, expect } from "vitest";
import { pairSum, ListNode } from "./solution";

function buildList(arr: number[]): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;
  for (const v of arr) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dummy.next;
}

function listToArr(head: ListNode | null): number[] {
  const out: number[] = [];
  for (let n = head; n !== null; n = n.next) out.push(n.val);
  return out;
}
describe("maximum-twin-sum-of-a-linked-list", () => {
  const cases: { input: number[]; want: number }[] = [
    { input: [5, 4, 2, 1], want: 6 },
    { input: [4, 2, 2, 3], want: 7 },
    { input: [1, 100000], want: 100001 },
  ];
  it.skip.each(cases)("pairSum(%j)", ({ input, want }) => {
    expect(pairSum(buildList(input))).toEqual(want);
  });
});
