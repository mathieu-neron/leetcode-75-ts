// LeetCode 1161: Maximum Level Sum Of A Binary Tree
// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}
export function maxLevelSum(root: TreeNode | null): number {
  // TODO
  return 0;
}

