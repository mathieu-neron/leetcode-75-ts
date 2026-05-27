// LeetCode 437: Path Sum Iii
// https://leetcode.com/problems/path-sum-iii/

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
export function pathSum(root: TreeNode | null, targetSum: number): number {
  // TODO
  return 0;
}

