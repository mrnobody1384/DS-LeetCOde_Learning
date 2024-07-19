"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class DoublyNode extends _1.ListNode {
    constructor(value) {
        super(value);
        this.previous = null;
    }
}
class DoublyLinkedList extends _1.LinkedList_Tail {
    constructor(value) {
        super(value);
        this.tail = null;
        const newNode = new DoublyNode(value);
        this.head = newNode;
        this.tail = newNode;
    }
    push(value) {
        const newNode = new DoublyNode(value);
        if (this.size == 1) {
            this.head.next = newNode;
            newNode.previous = this.head;
        }
        else {
            const perv = this.tail;
            perv.next = newNode;
            newNode.previous = perv;
        }
        this.tail = newNode;
        this.size++;
    }
    pop() {
        const removebleNode = this.tail;
        if (this.size == 1) {
            this.tail = null;
            this.head = null;
        }
        else {
            this.tail = removebleNode.previous;
            this.tail.next = null;
        }
        this.size--;
        return removebleNode === null || removebleNode === void 0 ? void 0 : removebleNode.value;
    }
}
const doublyList = new DoublyLinkedList(5);
doublyList.push(10);
doublyList.push(15);
doublyList.push(20);
doublyList.print();
doublyList.pop();
doublyList.print();
doublyList.pop();
doublyList.print();
doublyList.pop();
doublyList.print();
doublyList.pop();
doublyList.print();
console.log(doublyList);
//# sourceMappingURL=doublyLinkedList.js.map