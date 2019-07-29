class BinarySearchTree {
    constructor (root = null) {
        this.root = root
    }
    // 插入操作
    insertNode(root = this.root, newNode) {
        if (root.val <= newNode.val) {
            if (root.left == null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    // 对外暴露插入接口
    inser(val) {
        let node = new Node(val)
        if (this.root == null) {
            root = node
            return node
        }
        this.insertNode(this.root, node)
    }
    // 前序遍历
    preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }
    // 前序遍历对外暴露接口
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root,callback )
    }
    // 中序遍历
    inOrderTraverseNode(node, callback) {
        if (node !== null) {
            preOrderTraverseNode(node.left, callback);
            callback(node.key);
            preOrderTraverseNode(node.right, callback);
        }
    }
    // 中序遍历对外接口
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }
    // 后序遍历
    postOrderTraverseNode(node, callback) {
        if (node !== null) {
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    // 后续遍历接口
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }
    // 查找节点
    searchNode(node, key) {
        if (!node) {
            return false
        } else {
            if (node.val < key) {
                this.searchNode(node.right, key)
            } else if (node.val > key) {
                this.searchNode(node.left, key)
            } else {
                return true
            }
        }
    }
    // 对外暴露查找接口
    search(key) {
        return this.searchNode(this.root, key)
    }
    // 移除接口
    removeNode(node, key) {
        if(!node) {
            return 
        }
        if (key < node.val) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (key > node.val) {
            node.right = this.removeNode(node.right, key)
            return node
        } else {
            if (node.left === null && node.right === null) {
                if (node === root) {
                  root = null;
                }
                node = null;
                return node;
              } else if (node.left === null) {
                node = node.right;
                return node;
              } else if (node.right === null) {
                node = node.left;
                return node;
              } else {
                  var aux = this.findMinNode(node.right)
                  node.val = aux.val
                  node.right = this.removeNode(node.right, aux.val)
                  return node
              }
        }
    },
    findMinNode(node) {
        while(node && node.left) {
            node = node.left
        }
        return node
    }
}

class Node  {
    constructor (val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
} 