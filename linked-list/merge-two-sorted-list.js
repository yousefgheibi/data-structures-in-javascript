// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  let head = new Node(-1); // Dummy node
  let current = head;

  while (list1 !== null && list2 !== null) {
    if (list1.data <= list2.data) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach remaining nodes
  current.next = list1 !== null ? list1 : list2;
  return head.next;
}

let list1 = new Node(1, new Node(3, new Node(5)));
let list2 = new Node(2, new Node(4, new Node(6)));

let mergedList = mergeTwoLists(list1, list2);

function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.data);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

printList(mergedList);
