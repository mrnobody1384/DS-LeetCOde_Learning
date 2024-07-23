"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList_Tail = exports.LinkedList = exports.ListNode = void 0;
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.ListNode = ListNode;
class LinkedList {
    head;
    size = 0;
    constructor(value) {
        const node = new ListNode(value);
        this.head = node;
        this.size++;
    }
    isEmpty() {
        return this.size == 0;
    }
    prepend(value) {
        const node = new ListNode(value);
        if (this.head) {
            let current = this.head;
            node.next = current;
            this.head = node;
            this.size++;
            return;
        }
        else {
            this.head = node;
            this.size++;
            return;
        }
    }
    append(value) {
        const node = new ListNode(value);
        if (this.size == 0) {
            this.head = node;
            this.size++;
        }
        else {
            let current = this.head;
            while (current?.next) {
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
    }
    insert(pos, value) {
        if (pos < 0) {
            console.log("Index Is Out Of Range.");
        }
        else if (pos == 0) {
            this.prepend(value);
            return;
        }
        else if (pos == 0 && this.size > 0) {
            this.prepend(value);
            return;
        }
        else if (pos > this.size) {
            console.log("Index Is Out Of Range.");
            return;
        }
        else {
            // pos = 3
            const node = new ListNode(value);
            let perv = this.head;
            for (let i = 0; i < pos - 1; i++) {
                perv = perv.next;
            }
            node.next = perv.next;
            perv.next = node;
            this.size++;
            // console.log(perv);
        }
    }
    prepop() {
        if (this.isEmpty()) {
            console.log("The Size is 0 --> index is out Of Range");
            return;
        }
        this.head = this.head.next;
        this.size--;
    }
    pop() {
        let current = this.head;
        if (this.size == 2) {
            this.head.next = null;
            this.size--;
            return;
        }
        let removebleNode;
        while (current?.next?.next) {
            current = current.next;
            if (current?.next?.next == null) {
                removebleNode = current.next;
                current.next = null;
            }
        }
        return removebleNode?.value;
        this.size--;
        return removebleNode?.value;
    }
    removeAt(pos) {
        if (pos < 0) {
            console.log("Index Is Out Of Range.");
            return;
        }
        else if (pos == 0) {
            this.prepop();
            return;
        }
        else if (pos >= this.size) {
            console.log("Index Is Out Of Range.");
            return;
        }
        else if (pos + 1 == this.size) {
            this.pop();
            return;
        }
        else {
            let current = this.head;
            for (let i = 0; i + 1 < pos; i++) {
                console.log(i);
                current = current.next;
            }
            const removebleNode = current?.next;
            current.next = removebleNode.next;
            this.size--;
            return removebleNode?.value;
            // console.log('Its New List -->', newList.print());
        }
    }
    remove(value) {
        if (this.isEmpty()) {
            console.log("List Is Empty.");
            return;
        }
        let current = this.head;
        let findedNode;
        for (let i = 0; i < this.size; i++) {
            if (current?.next?.value == value) {
                let removebleNode = current?.next;
                current.next = removebleNode.next;
                return i + 1;
            }
            else if (current.value == value) {
                // console.log();
                this.prepop();
                return 0;
            }
            current = current.next;
        }
        return findedNode;
    }
    reverse() {
        if (this.size == 1) {
            return;
        }
        else if (this.isEmpty()) {
            console.log("List Is Empty");
            return;
        }
        else {
            let current = this.head;
            let perv = null;
            while (current) {
                let next = current?.next;
                current.next = perv;
                perv = current;
                current = next;
            }
            this.head = perv;
            console.log();
        }
    }
    print() {
        let list = "[";
        let current = this.head;
        while (current) {
            list += current.value + ",";
            current = current.next;
        }
        list = list.substring(0, list.length - 1);
        list += "]";
        if (this.isEmpty()) {
            list = "[]";
        }
        console.log(list);
    }
}
exports.LinkedList = LinkedList;
const list = new LinkedList(10);
list.prepend(5);
list.prepend(0);
list.append(20);
list.insert(3, 15);
// console.log(list.size);
// list.insert(4, 17);
// list.insert(0, -1);
// list.insert(8, 30);
// list.append(25);
list.prepop();
// list.print();
// list.pop();
// // list.print();
// list.pop();
// // list.print();
// list.pop();
// // list.print();
// // console.log(list.size);
// list.pop();
list.print();
// console.log(list.pop());
// list.print();
console.log(list.removeAt(1));
console.log(list.remove(5));
list.print();
console.log(list.size);
list.append(25);
list.reverse();
console.log(list.remove(15));
list.print();
class LinkedList_Tail extends LinkedList {
    tail;
    constructor(value) {
        super(value);
        if (this.head == null) {
            this.tail = null;
        }
        else {
            this.tail = this.head;
        }
    }
    append(value) {
        const node = new ListNode(value);
        let last = this.tail;
        last.next = node;
        this.tail = node;
    }
    pop() {
        let current = this.head;
        while (current?.next?.next) {
            current = current.next;
        }
        // console.log(current);
        const lastValue = this.tail?.value;
        current.next = null;
        this.tail = current;
        return lastValue;
    }
}
exports.LinkedList_Tail = LinkedList_Tail;
const tail_list = new LinkedList_Tail(0);
tail_list.append(5);
tail_list.append(10);
tail_list.print();
console.log(tail_list);
tail_list.pop();
tail_list.print();
console.log(tail_list);
//# sourceMappingURL=index.js.map