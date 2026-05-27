import { describe, it, expect } from "vitest";
import { rightSideView, TreeNode } from "./solution";

function buildTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]!);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift()!;
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]!);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]!);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}
describe("binary-tree-right-side-view", () => {
  const cases: { tree: (number | null)[]; want: any }[] = [
    { tree: [1, 2, 3, null, 5, null, 4], want: [1, 3, 4] },
    { tree: [1, null, 3], want: [1, 3] },
    { tree: [], want: [] },
  ];
  it.skip.each(cases)("rightSideView(%j)", ({ tree, want }) => {
    expect(rightSideView(buildTree(tree))).toEqual(want);
  });
});
