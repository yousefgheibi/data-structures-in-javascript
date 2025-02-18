// Given the head of a linked list and an index, return the data of the node at that index.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function getNodeAtIndex(head, index) {
  let current = head;
  let count = 0;

  while (current !== null) {
    if (count == index) {
      return current.data;
    }
    count++;
    current = current.next;
  }

  return null;
}

// linked list: 1 -> 10 -> 30 -> 14
let head = new Node(1, new Node(10, new Node(30, new Node(14))));

console.log(getNodeAtIndex(head, 2)); // 30
