import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns true iff `value` is in the BST.
 */
export function contains(bst: BinarySearchTree, value: number): boolean {
  return containsRecursive(bst.root, value); // calls the function recursively
}

function containsRecursive(node: TreeNode | undefined, value: number): boolean {
  if (node) {
    // it me has the value
    // termination case(condition) for recursive
    if (!node) {
      return false;
    } else if (node.value === value) {
      // if is it in my right hand
      return true; // it terminate after finding the value
    }

    // second recursive case
    // else if (node.right?.value === value) // if is it in my left hand
    // {
    //   return true;
    // }

    // // third recursive case
    // else if (node.left?.value === value)
    // {
    //   return true;
    // }

    if (containsRecursive(node.right, value)) {
      return true;
    }
    if (containsRecursive(node.left, value)) {
      return true;
    }
  }

  // if currentNode does not exist it terminate
  return false;
}
