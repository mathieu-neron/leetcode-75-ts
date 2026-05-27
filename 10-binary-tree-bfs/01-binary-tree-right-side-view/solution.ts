// LeetCode 199: Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/

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
export function rightSideView(root: TreeNode | null): number[] {
  // TODO
  return [];
}

