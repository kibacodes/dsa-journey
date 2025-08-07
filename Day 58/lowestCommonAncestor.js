/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let lca = null;

    // traverse tree
    let traversal = (curr) => {
        if(!curr) return 0; 
        // base case: if we reach leaf node

        let count=0;
        let ansOnLeft = traversal(curr.left);
        let ansOnRight = traversal(curr.right);

        if(curr.val === p.val || curr.val===q.val){
            ++count;
        }
        count = ansOnLeft + ansOnRight + count;
        if(count === 2 && !lca){
            lca=curr;
        }
        return count;
    }

    traversal(root);
    return lca;
};