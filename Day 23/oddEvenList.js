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
var oddEvenList = function(head) {
    // corner case for 0 or 1 element in LL. Works with 2 or more elements.
    if(!head || !head.next) return head;

    let odd = head; // odd is 1st Node in LL aka head
    let even = head.next; // even becomes 2nd Node after head in LL
    let evenStart = even; 
    // storing a copy of start of even nodes to connect with final odd node

    while(odd.next && even.next){ // running loop while next odd and even nodes exist
        odd.next = odd.next.next; // connecting to the next odd node
        even.next = even.next.next; // connecting to the next even node
        odd = odd.next; // move odd ahead to next odd index
        even = even.next; // move even ahead to next even index
    }

    // final odd node connecting to the evenStart or start of the even nodes
    odd.next = evenStart; 
    return head; // returning head returns the whole LL after reordering the list.
};