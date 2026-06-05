// LeetCode 215: Kth Largest Element In An Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/

import {MaxPriorityQueue, MinPriorityQueue, PriorityQueue} from "@datastructures-js/priority-queue";

export function findKthLargest_best(nums: number[], k: number): number {
  const min: number = Math.min(...nums);
  const max: number = Math.max(...nums);

  const count: number[] = new Array(max - min + 1).fill(0);
  for (const num of nums) {
    count[num - min]++;
  }

  let remainder = k;

  for (let num = count.length - 1; num >= 0; num--) {
    remainder -= count[num];
    if (remainder <= 0) {
      return num + min;
    }
  }

  return -1;
}

export function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinPriorityQueue<number>();

  for (const num of nums) {
    minHeap.enqueue(num);
    if (minHeap.size() > k) minHeap.dequeue();
  }

  return minHeap.dequeue() ?? -1;
}

