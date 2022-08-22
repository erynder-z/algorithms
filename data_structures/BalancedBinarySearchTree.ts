import { mergeSort } from '../recursion/mergeSort';

class BalancedBinarySearchTree {
  arr: number[] | null;
  root: BinarySearchTreeNode | null;
  inorderData: number[];
  preorderData: number[];
  postorderData: number[];

  constructor(arr: number[]) {
    this.arr = [...new Set(mergeSort(arr))];
    this.root = this.buildTree(this.arr, 0, this.arr.length - 1);
    this.inorderData = [];
    this.preorderData = [];
    this.postorderData = [];
  }

  buildTree(
    arr: number[],
    start: number,
    end: number
  ): BinarySearchTreeNode | null {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const rootNode = new BinarySearchTreeNode(arr[mid]);

    rootNode.leftChild = this.buildTree(arr, start, mid - 1);
    rootNode.rightChild = this.buildTree(arr, mid + 1, end);
    return rootNode;
  }

  find(data: number, root = this.root): BinarySearchTreeNode | null {
    if (root == null) {
      return null;
    }
    if (root.data === data) {
      return root;
    }
    if (root.data > data) {
      return this.find(data, root.leftChild);
    } else if (root.data < data) {
      return this.find(data, root.rightChild);
    }
    return root;
  }

  insert(data: number, root = this.root): BinarySearchTreeNode | null {
    const newNode = new BinarySearchTreeNode(data);

    if (root == null) {
      root = newNode;
    }

    if (root.data > data) {
      root.leftChild = this.insert(data, root.leftChild);
    } else if (root.data < data) {
      root.rightChild = this.insert(data, root.rightChild);
    }
    return root;
  }

  delete(data: number, root = this.root): BinarySearchTreeNode | null {
    if (root == null) {
      return root;
    }
    if (root.data > data) {
      root.leftChild = this.delete(data, root.leftChild);
    } else if (root.data < data) {
      root.rightChild = this.delete(data, root.rightChild);
    } else {
      if (root.leftChild == null) return root.rightChild;
      else if (root.rightChild == null) return root.leftChild;

      root.data = minValue(root.rightChild);
      root.rightChild = this.delete(root.data, root.rightChild);
    }
    return root;
  }

  levelOrder(root = this.root): number[] | any[] {
    const queue: BinarySearchTreeNode[] | any[] = [];
    const result: number[] = [];

    if (root == null) return [];

    queue.push(root);

    while (queue.length > 0) {
      let current = queue.shift();
      if (current) {
        result.push(current.data);
      }

      if (current?.leftChild !== null) queue.push(current?.leftChild);
      if (current?.rightChild !== null) queue.push(current?.rightChild);
    }
    return result;
  }

  inorder(root = this.root): number[] | any[] {
    if (root == null) return [];

    if (root.leftChild !== null) {
      this.inorder(root.leftChild);
    }

    if (root.data) {
      this.inorderData.push(root.data);
    }

    if (root.rightChild !== null) {
      this.inorder(root.rightChild);
    }
    return this.inorderData;
  }

  preorder(root = this.root): number[] | any[] {
    if (root == null) return [];

    if (root.data) {
      this.preorderData.push(root.data);
    }

    if (root.leftChild !== null) {
      this.preorder(root.leftChild);
    }

    if (root.rightChild !== null) {
      this.preorder(root.rightChild);
    }
    return this.preorderData;
  }

  postorder(root = this.root): number[] | any[] {
    if (root == null) return [];

    if (root.leftChild !== null) {
      this.postorder(root.leftChild);
    }

    if (root.rightChild !== null) {
      this.postorder(root.rightChild);
    }

    if (root.data) {
      this.postorderData.push(root.data);
    }
    return this.postorderData;
  }

  height(root = this.root): number {
    if (root == null) {
      return 0;
    } else {
      let leftHeight = this.height(root.leftChild);
      let rightHeight = this.height(root.rightChild);

      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  depth(
    nodeData: number,
    node = this.root,
    currentDepth: number = 0
  ): number | null {
    if (!node) return null;
    if (node.data === nodeData) return currentDepth;

    if (node.data < nodeData) {
      return this.depth(nodeData, node.rightChild, currentDepth + 1);
    } else {
      return this.depth(nodeData, node.leftChild, currentDepth + 1);
    }
  }

  isBalanced(root = this.root): boolean {
    if (root == null) return false;

    let leftSubtree = this.root?.leftChild;
    let rightSubtree = this.root?.rightChild;

    if (Math.abs(this.height(leftSubtree) - this.height(rightSubtree)) > 1) {
      return false;
    } else {
      return true;
    }
  }

  rebalance(): void {
    const inorderTree = this.inorder();
    this.root = this.buildTree(inorderTree, 0, inorderTree.length - 1);
  }
}

class BinarySearchTreeNode {
  data: number;
  leftChild: BinarySearchTreeNode | null;
  rightChild: BinarySearchTreeNode | null;

  constructor(value: number) {
    this.data = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

const minValue = (root: BinarySearchTreeNode): number => {
  let minv = root.data;
  while (root.leftChild != null) {
    minv = root.leftChild.data;
    root = root.leftChild;
  }
  return minv;
};

module.exports = BalancedBinarySearchTree;
