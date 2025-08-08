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
 * @return {boolean}
 */
var isValidBST = function (root, lo = null, hi = null) {
    if (!root) return true; // not a node that decides the answer, just there to do bottom up recursion.

    // if our value does not lie between the range
    if ((lo !== null && root.val <= lo) || (hi !== null && root.val >= hi)) return false;

    let isLeftBST = isValidBST(root.left, lo, root.val);
    let isRightBST = isValidBST(root.right, root.val, hi);

    return isLeftBST && isRightBST;
};