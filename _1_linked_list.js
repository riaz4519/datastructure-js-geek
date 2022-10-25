class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

// running code here
llist = new LinkedList();
llist.head = new Node(1);
second = new Node(2);
third = new Node(3);

llist.head.next = second;
second.next = third;

llist.printList();
