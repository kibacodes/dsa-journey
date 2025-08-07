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
var inOrderTraversal = function(root) {
    
    let ans = [];

    let traversal = function(curr) {
        // left -> root -> right
        if(!curr) return; // return a falsy value or nothing if no root exists
        traversal(curr.left); // going to the left child of the root
        ans.push(curr.val); // pushing the leaf of tree into ans
        traversal(curr.right); // going to the right child of the root
    };

    traversal(root);

    return ans;
};