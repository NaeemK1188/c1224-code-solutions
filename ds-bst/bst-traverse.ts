import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the values in the BST in numerical order, smallest to largest.
 */
export function traverse(bst: BinarySearchTree): number[] {
  return traverseRecursive(bst.root);
}

function traverseRecursive(node: TreeNode | undefined): number[] {
  if (!node) {
    return [];
  }

  const leftNode = traverseRecursive(node.left);
  const rightNode = traverseRecursive(node.right);
  // const answer = []; // line 32-34 or with the for loops
  // for (let i = 0; i < leftNode.length; i++); // left .1
  // {
  //   answer.push(leftNode)
  // }
  // answer.push(node.value); center .2
  // for (let i = 0; i < rightNode.length; i++); // right .3
  // {
  //   answer.push(rightNode);
  // }
  // or
  // we start left -> center -> right
  // answer.push(...leftNode);
  // answer.push(node.value); we cannot spread nod.value only rightNode and leftNode
  // answer.push(...rightNode)
  return [...leftNode, node.value, ...rightNode];
}
