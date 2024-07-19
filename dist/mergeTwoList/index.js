"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 !== null) {
        current.next = list1;
    }
    else if (list2 !== null) {
        current.next = list2;
    }
    return dummy.next;
}
function arrayToLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
// Helper function to convert a linked list to an array (for testing)
function linkedListToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}
let list1 = arrayToLinkedList([1, 2, 4]);
let list2 = arrayToLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);
console.log(linkedListToArray(mergedList));
//# sourceMappingURL=index.js.map