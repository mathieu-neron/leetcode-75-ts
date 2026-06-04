// LeetCode 933: Number Of Recent Calls
// https://leetcode.com/problems/number-of-recent-calls/

export class RecentCounter {
  readonly LOOKBACK: number = 3000;
  queue: number[];
  constructor() {
    this.queue = []
  }

  ping(t: number): number {
    this.queue.push(t);
    while (this.queue[0] < t - this.LOOKBACK) this.queue.shift();
    return this.queue.length;
  }
}
