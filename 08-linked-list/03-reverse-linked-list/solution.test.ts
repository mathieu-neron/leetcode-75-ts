import { describe, it, expect } from "vitest";
import { reverseList, ListNode } from "./solution";

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
describe("reverse-linked-list", () => {
  const cases: { input: number[]; want: number[] }[] = [
    { input: [1, 2, 3, 4, 5], want: [5, 4, 3, 2, 1] },
    { input: [1, 2], want: [2, 1] },
    { input: [], want: [] },
  ];
  it.skip.each(cases)("reverseList(%j)", ({ input, want }) => {
    expect(listToArr(reverseList(buildList(input)))).toEqual(want);
  });
});
