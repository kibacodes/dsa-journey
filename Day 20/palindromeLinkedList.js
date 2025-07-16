/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    // find the middle element
    let slow = fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half of list

    let prev = null;
    let curr = slow; // curr has the mid element stored in slow

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // checking for palindrome

    let firstList = head; // startNode or starting point
    let secondList = prev; // endNode or finishing point

    while (secondList) {
        if (firstList.val !== secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;

};