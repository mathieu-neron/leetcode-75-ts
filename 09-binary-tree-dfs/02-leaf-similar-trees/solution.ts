// LeetCode 872: Leaf Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/

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
export function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  // TODO
  return false;
}

