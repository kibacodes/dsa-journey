/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode();
  dummy.next = head;

  // Starting point of loop
  let p = dummy; // prev
  let c = head; // current
  let n = head.next; // next

  while (c && n) { // only swap if BOTH curr AND next exist
    // do this in order
    // swap takes place here
    p.next = n;
    c.next = n.next;
    n.next = c;

    // code to move on to the next pair
    p = c;
    c = p.next;
    n = c && c.next;
  }

  return dummy.next;
};
