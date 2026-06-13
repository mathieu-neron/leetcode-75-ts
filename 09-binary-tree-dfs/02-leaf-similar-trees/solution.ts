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
  const leaves1: number[] = [];
  const leaves2: number[] = [];

  function dfs(node: TreeNode | null, leafs: number[]) {
    if (!node) return;
    if (!node.left && !node.right) {
      leafs.push(node.val);
      return;
    }

    dfs(node.left, leafs);
    dfs(node.right, leafs);
  }

  dfs(root1, leaves1);
  dfs(root2, leaves2);

  if (leaves1.length !== leaves2.length) return false;
  return leaves1.every((val, index) => val === leaves2[index]);
}

