// Given the head of a linked list, rotate the list to the right by k places.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function rotateRight(head, k) {
  // Find the length of the linked list
  let length = 1;
  let tail = head;

  while (tail.next !== null) {
    tail = tail.next;
    length++;
  }

  //  Make the list circular
  tail.next = head;

  // Find the new tail (n - k - 1) and new head (n - k)
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null; // Break the loop

  return newHead;
}

function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.data);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

// linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

let rotatedList = rotateRight(head, 2); // Output: 4 -> 5 -> 1 -> 2 -> 3
printList(rotatedList);
