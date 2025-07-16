// Leetcode 141: Linked List Cycle with Constant Space Complexity

// Time Complexity - O(n); Space Complexity - O(1)

let hasCycle = function(head) {

    if (head === null) return false; // if we get an empty list, return false aka no cycle.

    let slow = head;
    let fast = head.next;

    while(slow !== fast) {

        if (fast === null || fast.next === null) return false; // if there is no cycle

        slow = slow.next;
        fast = fast.next.next;
    };

    return true; // means we broke out of loop and there is a cycle.
};