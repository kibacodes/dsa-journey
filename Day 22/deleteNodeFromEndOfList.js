/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Approach # 1 - Two Pass Method; Time Complexity: O(n); Space Complexity: O(1)
var removeNthFromEnd = function (head, n) {

    // setting up sentinel node
    let sentinel = new ListNode();
    sentinel.next = head;

    // calculating the length of the LL via LL traversal
    let length = 0;
    while (head) {
        head = head.next;
        length++;
    }


    // finding the position of node before the node to be deleted.
    let prevPos = length - n;

    let prev = sentinel; 
    // assigning sentinel node to prev since we need to track our prev element.

    // LL traversal till prevPos aka node before the node to be deleted
    for (let i = 0; i < prevPos; i++) {
        prev = prev.next;
    }

    // statement that deletes the node to be deleted
    prev.next = prev.next.next;

    return sentinel.next; // return sentinel.next aka the new head
};

// Approach #2 - One Pass Method; Time- O(n); Space- O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // add sentinel node at the start
    let sentinel = new ListNode();
    sentinel.next = head;

    // move first pointer ahead by n
    let first = sentinel;
    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    // move both pointers until first pointer reaches the last node
    let second = sentinel;
    while (first.next) {
        second = second.next;
        first = first.next;
    }

    // just delete second.next

    second.next = second.next.next;

    return sentinel.next;
};