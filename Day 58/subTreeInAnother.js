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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // serialization of tree and subtree
    let hashRoot = serialize(root);
    let hashSubRoot= serialize(subRoot);

    // find out hashSubRoot is a substring of hashRoot
    // can use KMP algorithm
    return hashRoot.includes(hashSubRoot);
};

let serialize = function (root) {
    let hash = "";
    let traversal = (curr) => {
        if(!curr) {
            hash = hash + "-#";
            return;
        }
        hash = hash + "-" + curr.val;
        traversal(curr.left);
        traversal(curr.right);
    };
    traversal(root)
    return hash;
}