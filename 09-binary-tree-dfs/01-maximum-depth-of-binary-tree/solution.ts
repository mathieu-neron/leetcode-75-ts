// LeetCode 104: Maximum Depth Of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
export function maxDepth(root: TreeNode | null): number {
  // TODO
  return 0;
}

