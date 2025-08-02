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
 * @return {number[]}
 */
var postOrderTraversal = function(root) {
    
    let ans = [];

    let traversal = function(curr) {
        // left -> right -> root
        if(!curr) return;
        traversal(curr.left);
        traversal(curr.right);
        ans.push(curr.val);
    };

    traversal(root);

    return ans;
};