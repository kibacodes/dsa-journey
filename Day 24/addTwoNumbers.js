/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let ans = new ListNode(); // a value to track node as to where we need to put the digit.
    // can be called dummy or sentinel node.
    let ansHead = ans; // ansCopy === ansHead
    // it points to the initial point of ans node aka the head.
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry = Math.floor(sum / 10); // this here gives us the carry value aka quotient
        let digit = sum % 10; // remainder is where you get the digit value

        let newNode = new ListNode(digit); // we store the sum of two numbers in newNode
        ans.next = newNode; 
        // attaching dummy node to the newNode to keep track of where digit is being added

        l1 = l1 && l1.next; // we go forward in 29 and 30 if value exists in l1 and l2
        l2 = l2 && l2.next;
        ans = ans.next; 
        // we traverse through newNode via dummy node (ans) to add the digits to newNode
    }

    return ansHead.next; // node after dummy node is the head hence we return that.

};