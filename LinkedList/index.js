"use strict";
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.size = 0;
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
            while (current === null || current === void 0 ? void 0 : current.next) {
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
    }
    insert(pos, value) {
        if (pos < 0) {
            console.log('Index Is Out Of Range.');
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
            console.log('Index Is Out Of Range.');
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
            console.log('The Size is 0 --> index is out Of Range');
            return;
        }
        this.head = this.head.next;
        this.size--;
    }
    pop() {
        var _a, _b;
        let current = this.head;
        if (this.size == 2) {
            this.head.next = null;
            this.size--;
            return;
        }
        let removebleNode;
        while ((_a = current === null || current === void 0 ? void 0 : current.next) === null || _a === void 0 ? void 0 : _a.next) {
            current = current.next;
            if (((_b = current === null || current === void 0 ? void 0 : current.next) === null || _b === void 0 ? void 0 : _b.next) == null) {
                removebleNode = current.next;
                current.next = null;
            }
        }
        this.size--;
        return removebleNode === null || removebleNode === void 0 ? void 0 : removebleNode.value;
    }
    removeAt(pos) {
        if (pos < 0) {
            console.log('Index Is Out Of Range.');
            return;
        }
        else if (pos == 0) {
            this.prepop();
            return;
        }
        else if (pos >= this.size) {
            console.log('Index Is Out Of Range.');
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
            const removebleNode = current === null || current === void 0 ? void 0 : current.next;
            current.next = removebleNode.next;
            this.size--;
            return removebleNode === null || removebleNode === void 0 ? void 0 : removebleNode.value;
            // console.log('Its New List -->', newList.print());
        }
    }
    remove(value) {
        var _a;
        if (this.isEmpty()) {
            console.log('List Is Empty.');
            return;
        }
        let current = this.head;
        let findedNode;
        for (let i = 0; i < this.size; i++) {
            if (((_a = current === null || current === void 0 ? void 0 : current.next) === null || _a === void 0 ? void 0 : _a.value) == value) {
                let removebleNode = current === null || current === void 0 ? void 0 : current.next;
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
            console.log('List Is Empty');
            return;
        }
        else {
            let current = this.head;
            let perv = null;
            while (current) {
                let next = current === null || current === void 0 ? void 0 : current.next;
                current.next = perv;
                perv = current;
                current = next;
            }
            this.head = perv;
            console.log();
        }
    }
    print() {
        let list = '[';
        let current = this.head;
        while (current) {
            list += current.value + ',';
            current = current.next;
        }
        list = list.substring(0, list.length - 1);
        list += ']';
        if (this.isEmpty()) {
            list = '[]';
        }
        console.log(list);
    }
}
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
        var _a;
        let current = this.head;
        while ((_a = current === null || current === void 0 ? void 0 : current.next) === null || _a === void 0 ? void 0 : _a.next) {
            current = current.next;
        }
        // console.log(current);
        current.next = null;
        this.tail = current;
    }
}
const tail_list = new LinkedList_Tail(0);
tail_list.append(5);
tail_list.append(10);
tail_list.print();
console.log(tail_list);
tail_list.pop();
tail_list.print();
console.log(tail_list);
//# sourceMappingURL=index.js.map