// LeetCode 450: Delete Node In A Bst
// https://leetcode.com/problems/delete-node-in-a-bst/

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
export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  // TODO
  return null;
}

