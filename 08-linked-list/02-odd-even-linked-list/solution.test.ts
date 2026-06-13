import { describe, it, expect } from "vitest";
import { oddEvenList, ListNode } from "./solution";

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
describe("odd-even-linked-list", () => {
  const cases: { input: number[]; want: number[] }[] = [
    { input: [1, 2, 3, 4, 5], want: [1, 3, 5, 2, 4] },
    { input: [2, 1, 3, 5, 6, 4, 7], want: [2, 3, 6, 7, 1, 5, 4] },
  ];
  it.each(cases)("oddEvenList(%j)", ({ input, want }) => {
    expect(listToArr(oddEvenList(buildList(input)))).toEqual(want);
  });
});
