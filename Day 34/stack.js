// File that explains how arrays can be used as a stack and do stack operations in JS

let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(8);

console.log(stack);
console.log(stack[stack.length - 1]);
// last element of array === top element of stack (return value of peek() in stack)

console.log(stack[3]) 
// Invalid stack operation, do NOT do this during interviews when asked a stack question.
// Never USE STACK AS AN ARRAY