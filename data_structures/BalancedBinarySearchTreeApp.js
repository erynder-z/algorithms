const balancedBinarySearchTree = require('./BalancedBinarySearchTree');

const randomArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);

const bbst = new balancedBinarySearchTree(randomArray);

console.log('is it balanced? ' + bbst.isBalanced());
console.log('levelOrder ' + bbst.levelOrder());
console.log('preorder ' + bbst.preorder());
console.log('postorder ' + bbst.postorder());
console.log('inorder ' + bbst.inorder());
console.log('insert 985');
bbst.insert(985);
console.log('insert 984');
bbst.insert(984);
console.log('insert 111');
bbst.insert(111);
console.log('is it balanced? ' + bbst.isBalanced());
console.log('rebalancing ');
bbst.rebalance();
console.log('is it balanced? ' + bbst.isBalanced());
console.log('levelOrder ' + bbst.levelOrder());
console.log('preorder ' + bbst.preorder());
console.log('postorder ' + bbst.postorder());
console.log('inorder ' + bbst.inorder());
