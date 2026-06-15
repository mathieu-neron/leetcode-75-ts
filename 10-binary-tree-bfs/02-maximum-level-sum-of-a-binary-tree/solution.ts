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
  if (!root) return 0;

  const q: TreeNode[] = [root];
  let idx = 0;
  let max = root.val;
  let level = 1;
  let result = 1;

  while (idx < q.length) {
    const size = q.length;
    let sum = 0;
    for (; idx<size; idx++) {
      let node = q[idx];
      sum += node.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    if (sum > max) {
      result = level;
      max = sum;
    }

    level++;
  }

  return result;
}

