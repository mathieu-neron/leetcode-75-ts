import { describe, it, expect } from "vitest";
import { deleteMiddle, ListNode } from "./solution";

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
describe("delete-the-middle-node-of-a-linked-list", () => {
  const cases: { input: number[]; want: number[] }[] = [
    { input: [1, 3, 4, 7, 1, 2, 6], want: [1, 3, 4, 1, 2, 6] },
    { input: [1, 2, 3, 4], want: [1, 2, 4] },
    { input: [2, 1], want: [2] },
  ];
  it.each(cases)("deleteMiddle(%j)", ({ input, want }) => {
    expect(listToArr(deleteMiddle(buildList(input)))).toEqual(want);
  });
});
