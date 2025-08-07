/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Approach with Recursion
 */
var levelOrder = function (root) {
    if(!root) return [];
    let ans = [];

    const traversal = (curr, level) => {
        if (!ans[level]) ans[level] = [];
        ans[level].push(curr.val);
        curr.left && traversal(curr.left, level + 1);
        curr.right && traversal(curr.right, level + 1);
    };
    traversal(root, 0);
    return ans;
};

// Approach with Iteration

var levelOrder = function(root) {
    if (!root) return [];
    let q= [root];
    let ans=[];

    while(q.length){
        let levelSize=q.length;
        let levelArr=[];
        for(let i = 0; i<levelSize; ++i){
            let curr=q.shift();
            curr.left&&q.push(curr.left);
            curr.right&&q.push(curr.right);
            levelArr.push(curr.val);
        }
        ans.push(levelArr);
    }

    return ans;
};
