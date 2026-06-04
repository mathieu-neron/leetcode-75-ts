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
  if (!root) return [];
  const queue: TreeNode[] = [root];
  const result: number[] = [];

  while (queue.length !== 0) {
    const size = queue.length;
    result.push(queue[size - 1].val);

    for (let i=0; i<size; i++) {
      const node = queue.shift();
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
  }

  return result;
}

