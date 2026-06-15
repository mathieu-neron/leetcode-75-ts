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
  if (root === null) return null;

  // Search for the key
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // Node found: handle the 3 deletion cases

    // Case 1 & 2: Node has 0 or 1 child
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    // Case 3: Node has two children
    // Find the In-Order Successor (smallest value in the right subtree)
    let current = root.right;
    while (current.left !== null) {
      current = current.left;
    }

    // Replace the current node's value with the Successor's value
    root.val = current.val;

    // Delete the duplicate Successor from the right subtree
    root.right = deleteNode(root.right, root.val);
  }

  return root;
}

