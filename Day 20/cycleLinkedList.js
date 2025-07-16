/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    let seenNodes = new Set(); // create a new set
    let curr = head; // a pointer to track elements in LL
    while(curr !== null) {
        if (seenNodes.has(curr)) { // if set already has val of node where curr is at
            return true; // then return true meaning it's an LL with cycle
        }
        seenNodes.add(curr); // if not then add the val to the set created above
        curr=curr.next; // and continue LL traversal aka moving pointer to next node.
    }

    return false; // else if no val spotted twice in set, then no LL with cycle aka false.

};