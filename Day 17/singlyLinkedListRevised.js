//  Set-up of Linked List

function Node(val) {
  this.val = val;
  this.next = null;
}

function myLinkedList() {
  this.head = null;
  this.size = 0;
}

// Add Nodes to the Linked List

function addAtHead(val) {
  let newNode = new Node(val);
  newNode.next = this.head; // first we point new Head to old Head
  this.head = newNode; // then, we shift Head point to our new Head
  this.size++;
}

function addAtTail(val) {
  // we need to reach last element first
  if (!this.head) {
    this.addAtHead(val);
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next; // this is how we traverse through the linked list
    }
    let newNode = new Node(val);
    curr.next = newNode;
    this.size++;
  }
}

function addAtIndex(val, index) {
  if (index === 0) {
    this.addAtHead(val);
  } else if (index === this.size) {
    this.addAtTail(val);
  } else {
    let newNode = new Node(val);

    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }
};

function get(index) {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr=curr.next;
    }
    return curr.val; // if asked to return node, then return curr
    // this returns value at the index of the node in LL.
};

// Getting and deleting elements from LL, given the index as parameter

function deleteIndex(index) {

    if(index === 0) {
        this.head = this.head.next;
    }

    let curr = this.head;

    for(let i = 0; i<index-1; i++) {
        curr=curr.next;
    }

    curr.next=curr.next.next;
    this.size--;
}