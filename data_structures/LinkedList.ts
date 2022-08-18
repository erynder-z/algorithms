class LinkedList<T> {
  head: LinkedListNode<T> | null;
  length: number;
  static fromValues: (...values: any[]) => LinkedList<unknown>;

  constructor() {
    this.head = null;
    this.length = 0;
  }
  // get size of list
  size(): number | null {
    return this.length;
  }

  // get value at beginning of list
  getHead(): LinkedListNode<T> | null {
    return this.head;
  }

  // get value at end of list
  getTail(): LinkedListNode<T> | null {
    if (this.length < 1) return this.getHead();
    return this.getByIndex(this.length - 1);
  }

  // insert value at beginning of list
  insertAtHead(value: T): void {
    const newNode = new LinkedListNode<T>(value, this.head);

    this.head = newNode;
    this.length++;
  }

  // insert value at end if list
  insertAtTail(value: T): void | null {
    if (this.length === 1) return this.insertAtHead(value);

    const prev = this.getByIndex(this.length - 1);
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  // get value at given index
  getByIndex(index: number): LinkedListNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current) {
        current = current?.next;
      }
    }
    return current;
  }

  // insert value at given index
  insertAtIndex(index: number, value: T): void | null {
    if (index === 0) return this.insertAtHead(value);

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  // remove value from beginning of list
  removeHead(): void {
    if (this.head) {
      this.head = this.head?.next;
      this.length--;
    }
  }

  // remove value from end of list
  removeTail(): void {
    if (this.length > 0) {
      this.removeAtIndex(this.length - 1);
    }
  }

  // remove value at given index
  removeAtIndex(index: number): void | null {
    if (index === 0) return this.removeHead();

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;
    if (prev.next) {
      prev.next = prev?.next?.next;
      this.length--;
    }
  }

  // check if list contains value
  contains(value: T): boolean {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current?.value === value) {
        return true;
      }
      if (current?.next) {
        current = current?.next;
      }
    }
    return false;
  }

  // return index of given value
  find(value: T): number | null {
    if (!this.head) {
      return null;
    }
    let index = 0;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current?.value === value) {
        return index;
      }
      if (current.next) {
        current = current?.next;
      }
      index++;
    }
    return null;
  }

  // log list as string
  print() {
    let output: string = '';
    let current = this.head;
    while (current) {
      output = `${output}${current.value} => `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T, next: LinkedListNode<T> | null) {
    this.value = value;
    this.next = next;
  }
}

// helper function for testing
LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
