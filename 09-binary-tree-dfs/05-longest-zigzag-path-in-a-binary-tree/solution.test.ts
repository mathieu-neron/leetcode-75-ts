import { describe, it, expect } from "vitest";
import { longestZigZag, TreeNode } from "./solution";

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
describe("longest-zigzag-path-in-a-binary-tree", () => {
  const cases: { tree: (number | null)[]; want: any }[] = [
    { tree: [1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1], want: 3 },
    { tree: [1, 1, 1, null, 1, null, null, 1, 1, null, 1], want: 4 },
    { tree: [1], want: 0 },
  ];
  it.skip.each(cases)("longestZigZag(%j)", ({ tree, want }) => {
    expect(longestZigZag(buildTree(tree))).toEqual(want);
  });
});
