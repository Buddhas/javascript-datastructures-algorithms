class Link {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

class linkList {
    constructor(root) {
        this.head = root
        this.length = 0
    }
    // 追加
    append(val) {
        let node = new Link(val)
        if (!this.head) {
            this.head = node
        } else {
            let temp = this.head
            while(temp.next) {
                temp = temp.next
            }
            temp.next = node
        }
        this.length++
    }
    // 删除
    removeAt(position) {
        let index = 1
        if (position >=1 && this.length >= position) {
            if (position == 1) {
                this.head = this.head.next
            } else {
                let curNode = this.head
                let preNode = null
                while(index < position) {
                    preNode = curNode
                    curNode = curNode.next
                    index++
                }
                preNode.next = curNode.next
            }
            this.length--
            return true
        }
        return false
    }
    // 插入
    insert(position, val) {
        if (position > 0 && position <= this.length) {
            let node = new Link(val)
            let curNode = this.head
            let preNode = null
            let index = 1
            if (position == 0) {
                node.next = curNode
                this.head = node
            } else {
                while(index < position) {
                    preNode = curNode
                    curNode = curNode.next
                    index++
                }
                node.next = curNode
                preNode.next = node
            }
        }
    }
    indexOf(val) {
        let current = this.head
        let index = 1
        while(current) {
            if (val = current.val) {
                return index
            }
            index++
            current = current.next
        }
    }
    isEmpty() {
        return this.length == 0
    }
    getHead() {
        return this.head
    }
    getLength() {
        return this.length
    }
}