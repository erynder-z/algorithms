const balancedBinarySearchTree = require('../BalancedBinarySearchTree');

const randomArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);

describe('#BalancedBinarySearchTree', () => {
  it('should turn an unsorted array into a balanced binary search tree', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);
    expect(bbst.root).toMatchObject({
      data: 8,
      leftChild: {
        data: 4,
        leftChild: {
          data: 1,
          leftChild: null,
          rightChild: {
            data: 3,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 5,
          leftChild: null,
          rightChild: {
            data: 7,
            leftChild: null,
            rightChild: null,
          },
        },
      },
      rightChild: {
        data: 67,
        leftChild: {
          data: 9,
          leftChild: null,
          rightChild: {
            data: 23,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 324,
          leftChild: null,
          rightChild: {
            data: 6345,
            leftChild: null,
            rightChild: null,
          },
        },
      },
    });
  });
});

describe('#buildTree', () => {
  it('returns the root node', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    expect(bbst.root.data).toBe(8);
  });
});

describe('#find', () => {
  it('returns the node containing the query data', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    expect(bbst.find(324)).toMatchObject({
      data: 324,
      leftChild: null,
      rightChild: {
        data: 6345,
        leftChild: null,
        rightChild: null,
      },
    });
  });

  it('returns null if query data does not exist on the tree', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    expect(bbst.find(99)).toBe(null);
  });
});

describe('#insert', () => {
  it('inserts a new tree node with the given value', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);
    bbst.insert(69);

    expect(bbst.find(69)).toMatchObject({
      data: 69,
      leftChild: null,
      rightChild: null,
    });

    expect(bbst.root).toMatchObject({
      data: 8,
      leftChild: {
        data: 4,
        leftChild: {
          data: 1,
          leftChild: null,
          rightChild: {
            data: 3,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 5,
          leftChild: null,
          rightChild: {
            data: 7,
            leftChild: null,
            rightChild: null,
          },
        },
      },
      rightChild: {
        data: 67,
        leftChild: {
          data: 9,
          leftChild: null,
          rightChild: {
            data: 23,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 324,
          leftChild: {
            data: 69,
            leftChild: null,
            rightChild: null,
          },
          rightChild: {
            data: 6345,
            leftChild: null,
            rightChild: null,
          },
        },
      },
    });
  });
});

describe('#delete', () => {
  describe('should remove the node with matching data from the bst', () => {
    it('if it is a leaf node', () => {
      const bbst = new balancedBinarySearchTree([
        1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
      ]);
      bbst.delete(6345);
      expect(bbst.root).toMatchObject({
        data: 8,
        leftChild: {
          data: 4,
          leftChild: {
            data: 1,
            leftChild: null,
            rightChild: {
              data: 3,
              leftChild: null,
              rightChild: null,
            },
          },
          rightChild: {
            data: 5,
            leftChild: null,
            rightChild: {
              data: 7,
              leftChild: null,
              rightChild: null,
            },
          },
        },
        rightChild: {
          data: 67,
          leftChild: {
            data: 9,
            leftChild: null,
            rightChild: {
              data: 23,
              leftChild: null,
              rightChild: null,
            },
          },
          rightChild: {
            data: 324,
            leftChild: null,
            rightChild: null,
          },
        },
      });
    });

    it('if it is the root node', () => {
      const bbst = new balancedBinarySearchTree([
        1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
      ]);
      bbst.delete(8);
      expect(bbst.root).toMatchObject({
        data: 9,
        leftChild: {
          data: 4,
          leftChild: {
            data: 1,
            leftChild: null,
            rightChild: {
              data: 3,
              leftChild: null,
              rightChild: null,
            },
          },
          rightChild: {
            data: 5,
            leftChild: null,
            rightChild: {
              data: 7,
              leftChild: null,
              rightChild: null,
            },
          },
        },
        rightChild: {
          data: 67,
          leftChild: {
            data: 23,
            leftChild: null,
            rightChild: null,
          },
          rightChild: {
            data: 324,
            leftChild: null,
            rightChild: {
              data: 6345,
              leftChild: null,
              rightChild: null,
            },
          },
        },
      });
    });

    it('if it is some child node', () => {
      const bbst = new balancedBinarySearchTree([
        1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
      ]);
      bbst.delete(67);
      expect(bbst.root).toMatchObject({
        data: 8,
        leftChild: {
          data: 4,
          leftChild: {
            data: 1,
            leftChild: null,
            rightChild: {
              data: 3,
              leftChild: null,
              rightChild: null,
            },
          },
          rightChild: {
            data: 5,
            leftChild: null,
            rightChild: {
              data: 7,
              leftChild: null,
              rightChild: null,
            },
          },
        },
        rightChild: {
          data: 324,
          leftChild: {
            data: 9,
            leftChild: null,
            rightChild: {
              data: 23,
              leftChild: null,
              rightChild: null,
            },
          },
          rightChild: {
            data: 6345,
            leftChild: null,
            rightChild: null,
          },
        },
      });
    });
  });
});

describe('#levelOrder', () => {
  it('return an array of all valuies in the tree in breadth-first level order', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    expect(bbst.levelOrder()).toEqual([8, 4, 67, 1, 5, 9, 324, 3, 7, 23, 6345]);
  });

  it('returns an empty array if tree ist empty', () => {
    const bbst = new balancedBinarySearchTree([]);

    expect(bbst.levelOrder()).toEqual([]);
  });
});

describe('#inorder', () => {
  it('should traverse from the left subtree to the root then to the right subtree and return an array with all tree values', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    expect(bbst.inorder()).toEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
  });

  it('returns an empty array if tree ist empty', () => {
    const bbst = new balancedBinarySearchTree([]);

    expect(bbst.inorder()).toEqual([]);
  });
});

describe('#preorder', () => {
  it('should traverse from the root to the left subtree then to the right subtree and return an array with all tree values', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    expect(bbst.preorder()).toEqual([8, 4, 1, 3, 5, 7, 67, 9, 23, 324, 6345]);
  });

  it('returns an empty array if tree ist empty', () => {
    const bbst = new balancedBinarySearchTree([]);

    expect(bbst.preorder()).toEqual([]);
  });
});

describe('#postorder', () => {
  it('should traverse from the  left subtree to the right subtree then to the root and return an array with all tree values', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    expect(bbst.postorder()).toEqual([3, 1, 7, 5, 4, 23, 9, 6345, 324, 67, 8]);
  });

  it('returns an empty array if tree ist empty', () => {
    const bbst = new balancedBinarySearchTree([]);

    expect(bbst.postorder()).toEqual([]);
  });
});

describe('#height', () => {
  it('should return the largest number of edges in a path from a leaf node to a target node.', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);
    const bbst2 = new balancedBinarySearchTree([1, 7, 4]);
    const bbst3 = new balancedBinarySearchTree([]);

    expect(bbst.height()).toBe(4);
    expect(bbst2.height()).toBe(2);
    expect(bbst3.height()).toBe(0);
  });
});

describe('#depth', () => {
  it('should return the total number of edges from the root node to the target node', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    expect(bbst.depth(null)).toBe(null);
    expect(bbst.depth(4)).toBe(1);
    expect(bbst.depth(1)).toBe(2);
  });
});

describe('#isBalanced', () => {
  it('should returns true if the tree is balanced', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    expect(bbst.isBalanced()).toBe(true);
  });

  it('should returns false if the tree is not balanced', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);
    bbst.insert(997);
    bbst.insert(998);
    bbst.insert(999);

    expect(bbst.isBalanced()).toBe(false);
  });
});

describe('#rebalance', () => {
  it('should returns a balanced tree if it was not blanced', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    bbst.insert(997);
    bbst.insert(998);
    bbst.insert(999);
    expect(bbst.isBalanced()).toBe(false);

    bbst.rebalance();

    expect(bbst.isBalanced()).toBe(true);

    expect(bbst.root).toMatchObject({
      data: 9,
      leftChild: {
        data: 4,
        leftChild: {
          data: 1,
          leftChild: null,
          rightChild: {
            data: 3,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 7,
          leftChild: {
            data: 5,
            leftChild: null,
            rightChild: null,
          },
          rightChild: {
            data: 8,
            leftChild: null,
            rightChild: null,
          },
        },
      },
      rightChild: {
        data: 997,
        leftChild: {
          data: 67,
          leftChild: {
            data: 23,
            leftChild: null,
            rightChild: null,
          },
          rightChild: {
            data: 324,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 999,
          leftChild: {
            data: 998,
            leftChild: null,
            rightChild: null,
          },
          rightChild: {
            data: 6345,
            leftChild: null,
            rightChild: null,
          },
        },
      },
    });
  });

  it('should not modify the tree if it is already balanced', () => {
    const bbst = new balancedBinarySearchTree([
      1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
    ]);

    bbst.rebalance();

    expect(bbst.root).toMatchObject({
      data: 8,
      leftChild: {
        data: 4,
        leftChild: {
          data: 1,
          leftChild: null,
          rightChild: {
            data: 3,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 5,
          leftChild: null,
          rightChild: {
            data: 7,
            leftChild: null,
            rightChild: null,
          },
        },
      },
      rightChild: {
        data: 67,
        leftChild: {
          data: 9,
          leftChild: null,
          rightChild: {
            data: 23,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 324,
          leftChild: null,
          rightChild: {
            data: 6345,
            leftChild: null,
            rightChild: null,
          },
        },
      },
    });
  });
});
