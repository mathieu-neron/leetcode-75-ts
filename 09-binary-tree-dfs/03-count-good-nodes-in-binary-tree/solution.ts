// LeetCode 1448: Count Good Nodes In Binary Tree
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

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
export function goodNodes(root: TreeNode | null): number {
  // TODO
  return 0;
}

