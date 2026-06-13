// LeetCode 328: Odd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}
export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = even.next.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}

