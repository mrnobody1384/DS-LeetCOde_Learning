import { ListNode, LinkedList_Tail } from ".";

class DoublyNode extends ListNode {
  previous: DoublyNode | null;
  constructor(value: number | undefined) {
    super(value);
    this.previous = null;
  }
}

class DoublyLinkedList extends LinkedList_Tail {
  tail: DoublyNode | null = null;
  head: DoublyNode | null;
  constructor(value: number) {
    super(value);
    const newNode = new DoublyNode(value);
    this.head = newNode;
    this.tail = newNode;
  }

  push(value: number) {
    const newNode = new DoublyNode(value);
    if (this.size == 1) {
      this.head!.next = newNode;
      newNode.previous = this.head;
    } else {
      const perv = this.tail;
      perv!.next = newNode;
      newNode.previous = perv;
    }
    this.tail = newNode;
    this.size++;
  }
  pop(): number | void {
    const removebleNode: null | DoublyNode = this.tail;
    if (this.size == 1) {
      this.tail = null;
      this.head = null;
    } else {
      this!.tail = removebleNode!.previous;
      this!.tail!.next = null;
    }
    this.size--;
    return removebleNode?.value;
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
