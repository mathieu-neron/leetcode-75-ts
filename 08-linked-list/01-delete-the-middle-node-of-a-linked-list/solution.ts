// LeetCode 2095: Delete The Middle Node Of A Linked List
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}
export function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return null;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next.next;

  while (fast && fast.next) {
    slow = slow?.next ?? null;
    fast = fast.next.next;
  }

  if (slow) slow.next = slow?.next?.next ?? null;

  return head;
}

