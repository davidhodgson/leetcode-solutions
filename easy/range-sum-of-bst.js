/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
   if (root == null) {
       return 0;
   }

   if (root.val > R) {
       // process left subtree
       return rangeSumBST(root.left, L, R);
   } else if (root.val < L) {
       // process right subtree
       return rangeSumBST(root.right, L, R);
   } else {
       return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
   }

}


function test() {
    let root = new TreeNode(10);
    let l1 = new TreeNode(5);
    let r1 = new TreeNode(15);

    root.left = l1;
    root.right = r1;
    console.log(rangeSumBST(root, 7, 15));

}

test();