/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Solution 1 - Without Dummy Node
var mergeTwoLists = function(list1, list2) {

    if (!list1) return list2; // if l1 does not exist, return l2
    if (!list2) return list1;// same as above

    let curr = null; // a pointer to track our location in LL.

    // if-else to get the starting point
    if(list1.val < list2.val) {
        curr = list1;
        list1 = list1.next;
    } else {
        curr = list2;
        list2 = list2.next;
    }

    let start = curr; // copy of the start point

    while (list1 && list2) { // run loop while l1 and l2 are present
        if (list1.val < list2.val) {
            curr.next = list1; // we point to l1
            list1 = list1.next; // we traverse through l1
        } else {
            curr.next = list2; // same thing as above for l2
            list2 = list2.next; // basically we are merging and then traversing
            // to the next node of either of the LL's 
        }
        curr = curr.next // our curr pointer moves to next node
    }

    if (!list1) {
        curr.next = list2; // when l1 is null, then we mark 
        // curr's next node to l2 which is still "not-null"
        // meaning l2 is still truthy value.
    }

    if (!list2) {
        curr.next = list1; // same as above
    }

    return start;
};


// Solution 2- With Dummy Node

var mergeTwoLists1 = function(list1, list2) {

    let start = new ListNode();
    let curr = start; // a pointer to track our location in LL.

    while (list1 && list2) { // run loop while l1 and l2 are present
        if (list1.val < list2.val) {
            curr.next = list1; // we point to l1
            list1 = list1.next; // we traverse through l1
        } else {
            curr.next = list2; // same thing as above for l2
            list2 = list2.next; // basically we are merging and then traversing
            // to the next node of either of the LL's 
        }
        curr = curr.next // our curr pointer moves to next node
    }

    if (!list1) {
        curr.next = list2; // when l1 is null, then we mark 
        // curr's next node to l2 which is still "not-null"
        // meaning l2 is still truthy value.
    }

    if (!list2) {
        curr.next = list1; // same as above
    }

    return start.next;
};