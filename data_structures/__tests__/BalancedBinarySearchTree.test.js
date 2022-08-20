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
