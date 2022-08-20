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
    find(data, root = this.root) {
        if (root == null) {
            return null;
        }
        if (root.data === data) {
            return root;
        }
        if (root.data > data) {
            return this.find(data, root.leftChild);
        }
        else if (root.data < data) {
            return this.find(data, root.rightChild);
        }
        return root;
    }
    insert(data, root = this.root) {
        const newNode = new BinarySearchTreeNode(data);
        if (root == null) {
            root = newNode;
        }
        if (root.data > data) {
            root.leftChild = this.insert(data, root.leftChild);
        }
        else if (root.data < data) {
            root.rightChild = this.insert(data, root.rightChild);
        }
        return root;
    }
    delete(data, root = this.root) {
        if (root == null) {
            return root;
        }
        if (root.data > data) {
            root.leftChild = this.delete(data, root.leftChild);
        }
        else if (root.data < data) {
            root.rightChild = this.delete(data, root.rightChild);
        }
        else {
            if (root.leftChild == null)
                return root.rightChild;
            else if (root.rightChild == null)
                return root.leftChild;
            root.data = minValue(root.rightChild);
            root.rightChild = this.delete(root.data, root.rightChild);
        }
        return root;
    }
}
class BinarySearchTreeNode {
    constructor(value) {
        this.data = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}
const minValue = (root) => {
    let minv = root.data;
    while (root.leftChild != null) {
        minv = root.leftChild.data;
        root = root.leftChild;
    }
    return minv;
};
module.exports = BalancedBinarySearchTree;
