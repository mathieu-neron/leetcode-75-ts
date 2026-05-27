// LeetCode 236: Lowest Common Ancestor Of A Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

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
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // TODO
  return null;
}

