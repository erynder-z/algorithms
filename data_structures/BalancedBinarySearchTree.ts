import { mergeSort } from '../recursion/mergeSort';

class BalancedBinarySearchTree {
  arr: number[] | null;
  root: BinarySearchTreeNode | null;
  constructor(arr: number[]) {
    this.arr = [...new Set(mergeSort(arr))];
    this.root = this.buildTree(this.arr, 0, this.arr.length - 1);
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

module.exports = BalancedBinarySearchTree;
