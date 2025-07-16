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
var swapPairs = function(head) {

    if(!head || !head.next) return head;

    let l = head; // left
    let r = head.next; // right

    l.next = swapPairs(r.next);
    r.next = l;

    return r;
};