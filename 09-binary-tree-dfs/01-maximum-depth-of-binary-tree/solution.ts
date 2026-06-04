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
  // Base case: An empty tree has a depth of 0
  if (!root) return 0;

  // Compute the depth of left and right subtrees recursively
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // The total depth is the max of both sides plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

function maxDepthClosure(root: TreeNode | null): number {
  let max = 0;

  function dfs(node: TreeNode | null, depth: number) {
    if (!node) return;
    max = Math.max(max, depth);
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 1);
  return max;
}

