// Leetcode 160

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    // put all nodes of headB inside a set
    let store = new Set();
    while(headB) {
        store.add(headB);
        headB = headB.next;
    }
    // check for each element of HeadA if they are present in set
    while(headA) {
        if (store.has(headA)) {
            return headA;
        }
        headA=headA.next;
    }

    return null; // only if there is no intersection
};