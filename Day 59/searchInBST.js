// Top Down Recursion

var searchBST = function(root, val) {
    let ans=null;

    let traversal = (curr) => {

        if(curr.val === val) {
            ans=curr;
        } else {
            if(curr.val < val){
                curr.right && traversal(curr.right);
            } else {
                curr.left && traversal(curr.left);
            }
        }
    };

    traversal(root);
    return ans;
};

// Bottom Up Recursion

var searchBST = function(root, val) {

    if(!root || root.val === val) return root;
    
    return root.val < val ? searchBST(root.right,val) : searchBST(root.left,val);
};