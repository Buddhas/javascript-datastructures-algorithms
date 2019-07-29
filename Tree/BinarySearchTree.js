let Stack = require('./../Stack/Stack');
class BinarySearchTree {
    constructor (root = null) {
        this.root = root
    }
    // 插入操作
    insertNode(root = this.root, newNode) {
        if (root.val > newNode.val) {
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
    insert(val) {
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
            callback(node.val);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    // 前序遍历对外暴露接口
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root,callback )
    }
    // 中序遍历
    inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.val);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    // 中序遍历对外接口
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }
    // 后序遍历
    postOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.val);
        }
    }
    // 后续遍历接口
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }
    // 查找节点
    searchNode(node, val) {
        if (!node) {
            return false
        } else {
            if (node.val < val) {
                this.searchNode(node.right, val)
            } else if (node.val > val) {
                this.searchNode(node.left, val)
            } else {
                return true
            }
        }
    }
    // 对外暴露查找接口
    search(val) {
        return this.searchNode(this.root, val)
    }
    // 对外暴露移除接口
    remove(val) {
        this.removeNode(this.root, val)
    }
    // 移除接口
    removeNode(node, val) {
        if(!node) {
            return 
        }
        if (val < node.val) {
            node.left = this.removeNode(node.left, val)
            return node
        } else if (val > node.val) {
            node.right = this.removeNode(node.right, val)
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
                  let aux = this.findMinNode(node.right)
                  node.val = aux.val
                  node.right = this.removeNode(node.right, aux.val)
                  return node
              }
        }
    }
    // 寻找节点
    findMinNode(node) {
        while(node && node.left) {
            node = node.left
        }
        return node
    }
    // 最大节点
    maxNode(node) {
        if (node) {
            while(node && node.right !== null) {
                node = node.right
            }
            return node.val
        }
        return null
    }
    // 最大节点暴露接口
    max() {
        return this.maxNode(this.root)
    }
    // 最小节点
    minNode(node) {
        if (node) {
            while (node && node.left !== null) {
              node = node.left;
            }
            return node.val;
          }
          return null;
    }
    // 最小节点暴露接口
    min() {
        return this.minNode(this.root)
    }
    // 前序遍历非递归实现
    preOrderTraverseUnRec(callback) {
        if (this.root) {
            let stack = new Stack() 
            stack.push(this.root)
            while(!stack.isEmpty()) {
                
                let node = stack.pop()
                if (callback) {
                    callback(node.val)
                }
                if (node.right) {
                    stack.push(node.right)
                }
                if (node.left) {
                    stack.push(node.left)
                }
            }
        }
    }
    // 中序遍历非递归实现
    inOrderTraverseUnRec(callback) {
        if (this.root !== null) {
            let stack = new Stack()
            let node = this.root
            while(!stack.isEmpty() || node) {
                if (node != null) {
                    stack.push(node)
                    node = node.left
                } else {
                    node = stack.pop()
                    console.log(node)
                    callback(node)
                    node = node.right
                }
            }
        }
    }
    // 后续遍历非递归实现
    postOrderTraverseUnRec(callback) {
        if (this.root) {
            let stack = new Stack()
            let outputStack = new Stack()
            stack.push(this.root)
            while(!stack.isEmpty()) {
                let node = stack.pop()
                outputStack.push(node)
                if (node.left) {
                    stack.push(node.left)
                }
                if (node.right) {
                    stack.push(node.right)
                }
            }
            while(!outputStack.isEmpty()) {
                let node = outputStack.pop()
                if (callback) {
                    callback(node.val)
                }
            }
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
let n1 = new Node(5)
let binarySearchTree = new BinarySearchTree(n1)
binarySearchTree.insert(11);
binarySearchTree.insert(7);
binarySearchTree.insert(13);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(9);



binarySearchTree.insert(1)
binarySearchTree.insert(100)
binarySearchTree.remove(100)
binarySearchTree.inOrderTraverse(function(val) {
})

binarySearchTree.inOrderTraverseUnRec(function(val) {
})