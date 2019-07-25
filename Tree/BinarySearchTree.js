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
}

class Node  {
    constructor (val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
} 