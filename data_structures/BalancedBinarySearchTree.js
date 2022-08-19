"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeSort_1 = require("../recursion/mergeSort");
class BalancedBinarySearchTree {
    constructor(arr) {
        this.arr = [...new Set((0, mergeSort_1.mergeSort)(arr))];
        this.root = this.buildTree(this.arr, 0, this.arr.length - 1);
    }
    buildTree(arr, start, end) {
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
    constructor(value) {
        this.data = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}
module.exports = BalancedBinarySearchTree;
