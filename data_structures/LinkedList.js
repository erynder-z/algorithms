"use strict";
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    insertAtHead(data) {
        const newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        this.length++;
    }
    getByIndex(index) {
        if (index < 0 || index >= this.length)
            return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current) {
                current = current === null || current === void 0 ? void 0 : current.next;
            }
        }
        return current;
    }
    insertAtIndex(index, value) {
        if (index === 0)
            return this.insertAtHead(value);
        const prev = this.getByIndex(index - 1);
        if (prev == null)
            return null;
        prev.next = new LinkedListNode(value, prev.next);
        this.length++;
    }
    removeHead() {
        var _a;
        if (this.head) {
            this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
            this.length--;
        }
    }
    removeAtIndex(index) {
        var _a;
        if (index === 0)
            return this.removeHead();
        const prev = this.getByIndex(index - 1);
        if (prev == null)
            return null;
        if (prev.next) {
            prev.next = (_a = prev === null || prev === void 0 ? void 0 : prev.next) === null || _a === void 0 ? void 0 : _a.next;
            this.length--;
        }
    }
    print() {
        let output = '';
        let current = this.head;
        while (current) {
            output = `${output}${current.value} => `;
            current = current.next;
        }
        console.log(`${output}null`);
    }
}
class LinkedListNode {
    constructor(value, next) {
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
