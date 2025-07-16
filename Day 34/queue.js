// File that explains how arrays can be used as a queue and do queue operations in JS

let q = [];

//enqueue (add elements)
q.push(1);
q.push(2);
q.push(3);
q.push(4);

//dequeue (remove elements first in queue)
q.shift();
q.shift();


console.log(q);

// peek/front aka find the first element in my queue

let front = q[0];
console.log(front);

// q.pop(); or q[1]
// NEVER DO THE ABOVE. It is an INVALID OPERATION IN QUEUE