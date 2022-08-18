"use strict";
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    // get size of list
    size() {
        return this.length;
    }
    // get value at beginning of list
    getHead() {
        return this.head;
    }
    // get value at end of list
    getTail() {
        if (this.length < 1)
            return this.getHead();
        return this.getByIndex(this.length - 1);
    }
    // insert value at beginning of list
    insertAtHead(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        this.length++;
    }
    // insert value at end if list
    insertAtTail(value) {
        if (this.length === 1)
            return this.insertAtHead(value);
        const prev = this.getByIndex(this.length - 1);
        if (prev == null)
            return null;
        prev.next = new LinkedListNode(value, prev.next);
        this.length++;
    }
    // get value at given index
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
    // insert value at given index
    insertAtIndex(index, value) {
        if (index === 0)
            return this.insertAtHead(value);
        const prev = this.getByIndex(index - 1);
        if (prev == null)
            return null;
        prev.next = new LinkedListNode(value, prev.next);
        this.length++;
    }
    // remove value from beginning of list
    removeHead() {
        var _a;
        if (this.head) {
            this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
            this.length--;
        }
    }
    // remove value from end of list
    removeTail() {
        if (this.length > 0) {
            this.removeAtIndex(this.length - 1);
        }
    }
    // remove value at given index
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
    // check if list contains value
    contains(value) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if ((current === null || current === void 0 ? void 0 : current.value) === value) {
                return true;
            }
            if (current === null || current === void 0 ? void 0 : current.next) {
                current = current === null || current === void 0 ? void 0 : current.next;
            }
        }
        return false;
    }
    // return index of given value
    find(value) {
        if (!this.head) {
            return null;
        }
        let index = 0;
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if ((current === null || current === void 0 ? void 0 : current.value) === value) {
                return index;
            }
            if (current.next) {
                current = current === null || current === void 0 ? void 0 : current.next;
            }
            index++;
        }
        return null;
    }
    // log list as string
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
// helper function for testing
LinkedList.fromValues = function (...values) {
    const ll = new LinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
        ll.insertAtHead(values[i]);
    }
    return ll;
};
module.exports = LinkedList;
