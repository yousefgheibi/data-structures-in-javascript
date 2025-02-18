// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function hasCycle(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Moves one step
    fast = fast.next.next; // Moves two steps

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

function createCycle(head, pos) {
  if (pos === -1) return;

  let cycleNode = head,
    lastNode = head;
  let index = 0;

  while (lastNode.next !== null) {
    if (index === pos) {
      cycleNode = lastNode;
    }
    lastNode = lastNode.next;
    index++;
  }

  // Create loop by pointing last node to the cycle node
  lastNode.next = cycleNode;
}

// linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
createCycle(head, 2);
