"use strict";
// we switch between nodes and check if they values are the same, skip next of them
function deleteDuplicates(head) {
    let t_node = head;
    while (t_node !== null) {
        if (t_node.next != null &&
            t_node.val === t_node.next.val) {
            t_node.next = t_node.next.next;
            continue;
        }
        t_node = t_node.next;
    }
    return head;
}
;
//# sourceMappingURL=index.js.map