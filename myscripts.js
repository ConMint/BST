class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  sortRemoveDupes(array) {
    const sorted = [...new Set(array)].sort((a, b) => a - b);
    return sorted;
  }
  buildTree(array) {
    let sorted = this.sortRemoveDupes(array);
    if (sorted.length === 0) return null;
    const mid = parseInt(sorted.length / 2);
    const root = new Node(
      sorted[mid],
      this.buildTree(sorted.slice(0, mid)),
      this.buildTree(sorted.slice(mid + 1))
    );
    return root;
  }
}

treetest = new Tree([1, 2, 3]);

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

prettyPrint(treetest.root);
