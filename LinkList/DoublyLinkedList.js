class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.pre = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    insert(position, element) {
        if (this.length < position || position < 0) {
            return
        }
        let node = new Node(element)
        let currentNode = this.head
        let preNode = null
        if (position == 0) {
            if (!this.head) {
                this.head = node
                this.tail = node
            } else {
                currentNode.pre = node
                node.next = currentNode
                this.head = node
            }   
        } else {
            let index = 0
            while(index < position) {
                preNode = currentNode
                currentNode = currentNode.next
                index++
            }
            preNode.next = node
            node.next = currentNode
            node.pre = preNode
            currentNode.pre = node
        }
        this.length++
    }
    remoteAt(position) {
        if (position < 0 || this.length < position) {
            return
        }
        let currentNode = this.head
        let preNode = null
        let index = 0
        if (position == 0) {
            if (this.length == 1) {
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
                this.head.pre = null
            }
        } else if (position == this.length - 1) {
            currentNode = this.tail
            this.tail = this.tail.pre
            currentNode.pre = null
            this.tail.next = null
        } else {
            while(position > index) {
                preNode = currentNode
                currentNode = currentNode.next
                index++
            }
            preNode.next = currentNode.next
            currentNode.next.pre = preNode
        }
        this.length--
    }
    append(val) {
        let node = new Node(val)
        let currentNode = this.head
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
            node.pre = currentNode
            this.length++
        }
    }
    printFromHead() {
        let currentNode = this.head
        while(currentNode) {
            console.log(currentNode.val)
            currentNode = currentNode.next
        }
    }
}


let doublyLinked= new DoublyLinkedList()

for(let i = 0; i < 10; i++) {
    doublyLinked.append(i)
}

doublyLinked.remoteAt(5)
doublyLinked.printFromHead()
