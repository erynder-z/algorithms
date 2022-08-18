"use strict";
class Queue {
    constructor(capacity = Infinity) {
        this.capacity = capacity;
        this.storage = [];
    }
    enqueue(item) {
        if (this.size() === this.capacity) {
            throw Error('Queue has reached max capacity, you cannot add more items');
        }
        this.storage.push(item);
    }
    dequeue() {
        return this.storage.shift();
    }
    size() {
        return this.storage.length;
    }
}
const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.size(); // Output: 2
queue.dequeue(); // Output: "A"
queue.size(); // Output: 1
