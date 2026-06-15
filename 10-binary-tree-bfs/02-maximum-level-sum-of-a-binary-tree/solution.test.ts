import { describe, it, expect } from "vitest";
import { maxLevelSum, TreeNode } from "./solution";

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
describe("maximum-level-sum-of-a-binary-tree", () => {
  const cases: { tree: (number | null)[]; want: any }[] = [
    { tree: [1, 7, 0, 7, -8, null, null], want: 2 },
    { tree: [989, null, 10250, 98693, -89388, null, null, null, -32127], want: 2 },
  ];
  it.each(cases)("maxLevelSum(%j)", ({ tree, want }) => {
    expect(maxLevelSum(buildTree(tree))).toEqual(want);
  });
});
