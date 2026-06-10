// LeetCode 208: Implement Trie Prefix Tree
// https://leetcode.com/problems/implement-trie-prefix-tree/


class Node {
  isWord: boolean = false;
  children: Map<string, Node> = new Map();

  constructor() {
  }
}

export class Trie {
  root: Node;

  constructor() {
    this.root = new Node();
  }

  insert(word: string): void {
    let curr = this.root;

    for (const c of word) {
      if (!curr.children.has(c)) {
        curr.children.set(c, new Node());
      }
      curr = curr.children.get(c) as Node;
    }

    curr.isWord = true;
  }

  search(word: string): boolean {
    let curr = this.root;

    for (const c of word) {
      if (!curr.children.has(c)) {
        return false;
      }
      curr = curr.children.get(c) as Node;
    }

    return curr.isWord;
  }

  startsWith(prefix: string): boolean {
    let curr = this.root;

    for (const c of prefix) {
      if (!curr.children.has(c)) {
        return false;
      }
      curr = curr.children.get(c) as Node;
    }

    return true;
  }
}
