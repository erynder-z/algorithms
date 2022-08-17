class LinkedList<T> {
  head: LinkedListNode<T> | null;
  length: number;
  static fromValues: (...values: any[]) => LinkedList<unknown>;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data: T): void {
    const newNode = new LinkedListNode<T>(data, this.head);

    this.head = newNode;
    this.length++;
  }

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

  insertAtIndex(index: number, value: T): void | null {
    if (index === 0) return this.insertAtHead(value);

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  removeHead(): void {
    if (this.head) {
      this.head = this.head?.next;
      this.length--;
    }
  }

  // helper function for testing
  removeAtIndex(index: number): void | null {
    if (index === 0) return this.removeHead();

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;
    if (prev.next) {
      prev.next = prev?.next?.next;
      this.length--;
    }
  }

  // helper function for testing
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

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
