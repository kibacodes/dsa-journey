let middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

let result = middleNode([1,2,3,4,5]);
console.log(result);