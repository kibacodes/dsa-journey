// Approach with 2 Stacks
var postorderTraversal = function (root) {
    if (!root) return [];
    let s1 = [root];
    let s2 = [];

    while (s1.length) {
        let curr = s1.pop();
        s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }

    let ans = [];
    while (s2.length) {
        ans.push(s2.pop().val);
    }
    return ans;
};

// Approach with 1 stack

var postorderTraversal = function(root) {
    let stack = [];
    let ans=[];
    let curr=root;
    let lastVisited = null;
    
    while(curr||stack.length){
        while(curr) {
            stack.push(curr);
            curr=curr.left;
        }
        let peek=stack[stack.length-1];
        if(peek.right && peek.right !== lastVisited){
            curr=peek.right
        } else {
            ans.push(peek.val);
            lastVisited = stack.pop();
        }
    }

    return ans;
};