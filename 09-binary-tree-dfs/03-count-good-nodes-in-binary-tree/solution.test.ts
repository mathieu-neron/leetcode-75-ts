import { describe, it, expect } from "vitest";
import { goodNodes, TreeNode } from "./solution";

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
describe("count-good-nodes-in-binary-tree", () => {
  const cases: { tree: (number | null)[]; want: any }[] = [
    { tree: [3, 1, 4, 3, null, 1, 5], want: 4 },
    { tree: [3, 3, null, 4, 2], want: 3 },
    { tree: [1], want: 1 },
  ];
  it.skip.each(cases)("goodNodes(%j)", ({ tree, want }) => {
    expect(goodNodes(buildTree(tree))).toEqual(want);
  });
});
