var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function mergeTwoLists(list1, list2) {
    var dummy = new ListNode(-1);
    var current = dummy;
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
    var head = new ListNode(arr[0]);
    var current = head;
    for (var i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
// Helper function to convert a linked list to an array (for testing)
function linkedListToArray(head) {
    var arr = [];
    var current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}
var list1 = arrayToLinkedList([1, 2, 4]);
var list2 = arrayToLinkedList([1, 3, 4]);
var mergedList = mergeTwoLists(list1, list2);
console.log(linkedListToArray(mergedList));