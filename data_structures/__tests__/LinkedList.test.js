const linkedList = require('../LinkedList');

describe('#size', () => {
  it('returns the length ot the list', () => {
    const ll = new linkedList();
    ll.insertAtHead(10);
    const oldLength = ll.size();
    ll.insertAtHead(20);

    expect(oldLength).toBe(1);
    expect(ll.size()).toBe(2);
  });
});

describe('#getHead', () => {
  it('returns the head-node', () => {
    const ll = linkedList.fromValues(10, 20);

    expect(ll.getHead().value).toBe(10);
  });
});

describe('#getTail', () => {
  it('returns the tail-node', () => {
    const ll = linkedList.fromValues(10, 20);

    expect(ll.getTail().value).toBe(20);
  });
});

describe('#insertAtHead', () => {
  it('adds the elment to the beginning of the list', () => {
    const ll = new linkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe('#insertAtTail', () => {
  it('adds the elment to the end of the list', () => {
    const ll = linkedList.fromValues(10, 20);
    ll.insertAtTail(30);
    const node = ll.getByIndex(2);

    expect(ll.getByIndex(2).value).toBe(30);
    expect(node.next).toBe(null);
    expect(ll.length).toBe(3);
  });
});

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    it(' returns null', () => {
      const ll = linkedList.fromValues(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe('#getByIndex', () => {
    describe('with index greater than list length ', () => {
      it(' returns null', () => {
        const ll = linkedList.fromValues(10, 20);

        expect(ll.getByIndex(5)).toBeNull();
      });
    });

    describe('with index 0', () => {
      it('returns the head', () => {
        const ll = linkedList.fromValues(10, 20);

        expect(ll.getByIndex(0).value).toBe(10);
      });
    });

    describe('with index in the middle', () => {
      it('returns the element at that index', () => {
        const ll = linkedList.fromValues(10, 20, 30, 40);

        expect(ll.getByIndex(2).value).toBe(30);
      });
    });
  });
});

describe('#insertAtIndex', () => {
  describe('with index less than 0', () => {
    it('does not insert anything', () => {
      const ll = linkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 50);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index greater than the list length', () => {
    it('does not insert anything', () => {
      const ll = linkedList.fromValues(10, 20);
      ll.insertAtIndex(5, 50);

      expect(ll.length).toBe(2);
    });
  });

  describe('with an index  0', () => {
    it('should insert at the head', () => {
      const ll = linkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 50);

      expect(ll.head.value).toBe(50);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe('with index in the middle', () => {
    it('should insert at the given index', () => {
      const ll = linkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      const node = ll.getByIndex(2);

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});

describe('#removeHead', () => {
  it('removes the head', () => {
    const ll = linkedList.fromValues(10, 20, 30);
    ll.removeHead();

    expect(ll.head.value).toBe(20);
    expect(ll.length).toBe(2);
  });
});

describe('#removeTail', () => {
  it('removes the tail', () => {
    const ll = linkedList.fromValues(10, 20, 30);
    ll.removeTail();

    expect(ll.head.value).toBe(10);
    expect(ll.getTail().value).toBe(20);
    expect(ll.length).toBe(2);
  });
});

describe('#removeAtIndex', () => {
  describe('with index less than 0', () => {
    it('does not remove anything', () => {
      const ll = linkedList.fromValues(10, 20);
      ll.removeAtIndex(-1, 50);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index greater than the list length', () => {
    it('does not remove anything', () => {
      const ll = linkedList.fromValues(10, 20);
      ll.removeAtIndex(5, 50);

      expect(ll.length).toBe(2);
    });
  });

  describe('with an index  0', () => {
    it('should remove the head', () => {
      const ll = linkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(0);

      expect(ll.head.value).toBe(20);
      expect(ll.head.next.value).toBe(30);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index in the middle', () => {
    it('should remove at the given index', () => {
      const ll = linkedList.fromValues(10, 20, 30, 40);
      ll.removeAtIndex(2);
      const node = ll.getByIndex(1);

      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(ll.length).toBe(3);
    });
  });
});

describe('#contains', () => {
  describe('if the list contains the element', () => {
    it('returns true', () => {
      const ll = linkedList.fromValues(10, 20, 30);
      expect(ll.contains(20)).toBe(true);
    });
  });

  describe('if the list does not contains the element', () => {
    it('returns false', () => {
      const ll = linkedList.fromValues(10, 20, 30);
      expect(ll.contains(40)).toBe(false);
    });
  });
});

describe('#find', () => {
  describe('if the list contains the element', () => {
    it('returns the index of that element', () => {
      const ll = linkedList.fromValues(10, 20, 30);
      expect(ll.find(20)).toBe(1);
    });
  });

  describe('if the list does not contains the element', () => {
    it('returns null', () => {
      const ll = linkedList.fromValues(10, 20, 30);
      expect(ll.find(40)).toBe(null);
    });
  });
});
