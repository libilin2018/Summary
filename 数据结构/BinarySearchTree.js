/**
 * 二叉搜索树 BST
 */
function BinarySearchTree () {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;
    // 向树中插入一个键
    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }
    var insertNode = function (node, newNode) {
        if (newNode.left < node.left) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    // 中序遍历
    this.inOrderTraverse = function (callback) {
        // callback对每个节点进行的操作
        inOrderTraverseNode(root, callback)
    }
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback)
        }
    }
    // 先序遍历
    this.preOrderTraverse = function (callback) {
        // callback对每个节点进行的操作
        preOrderTraverseNode(root, callback)
    }
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback)
        }
    }
    // 后序遍历
    this.postOrderTraverse = function (callback) {
        // callback对每个节点进行的操作
        postOrderTraverseNode(root, callback)
    }
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    // 查找树最小键
    this.min = function () {
        return minNode(root)
    }
    function minNode (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key
        }
        return null
    }
    // 查找树最大值
    this.max = function () {
        return maxNode(root)
    }
    function maxNode (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }
    // 搜索特定值
    this.search = function (key) {
        return searchNode(root, key)
    }
    function searchNode (node, key) {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return searchNode(node.left, key)
        } else if (key > node.key) {
            return searchNode(node.left, key)
        } else {
            return true
        }
    }
    // 移除一个节点
    this.remove = function (key) {
        root = removeNode(root, key)
    }
    function removeNode (node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node
        } else { // 键等于node.key
            // 第一种情况：没有子节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // 只有一个子节点
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left;
                return node
            }
            //有两个子节点
            var aux = findMinNode(node.right); // 找出右子树最小节点
            node.key = aux.key; // 改变node节点
            node.right = removeNode(node.right, aux.key); // 移除aux节点
            return node
        }
    }
    function findMinNode (node) {
        while (node && node.left !== null) {
            node = node.left
        }
        return node
    }
}

/**
 * 自平衡树 AVL树
 */