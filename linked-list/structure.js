/* 
Linked List is a linear and dynamic data structure composed of a series of nodes. Each node consists of two main parts:

- Data: The value or information stored in the node.
- Pointer: The address of the next node in the list.

Unlike arrays, where elements are stored contiguously in memory, 
the elements of a linked list are stored non-contiguously, and each node points to the next node. 
*/

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(data) {
      const newNode = new Node(data);
      
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      
      this.length++;
    }

    pop() {
      if (this.length === 0) return null;
      
      let current = this.head;
      let newTail = current;
      
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      
      return current.data;
    }
  }