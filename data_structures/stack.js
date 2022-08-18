"use strict";
class Stack {
    constructor(capacity = Infinity) {
        this.capacity = capacity;
        this.storage = [];
    }
    push(item) {
        if (this.size() === this.capacity) {
            throw Error('Stack has reached max capacity, you cannot add more items');
        }
        this.storage.push(item);
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[this.size() - 1];
    }
    size() {
        return this.storage.length;
    }
}
const stack = new Stack();
stack.push('A');
stack.push('B');
stack.size(); // Output: 2
stack.peek(); // Output: "B"
stack.size(); // Output: 2
stack.pop(); // Output: "B"
stack.size(); // Output: 1
