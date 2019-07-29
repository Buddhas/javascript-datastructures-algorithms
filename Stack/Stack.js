class Stack {
    constructor() {
        this.items = []  // 私有变量 items，用于记录数组，对象不能直接操作
    }
    // 类方法 push，在数组末尾添加项，对象可以直接调用
    push(item) {
        this.items.push(item)
    }
    // 删除并返回数组末尾的项
    pop() {
        return this.items.pop()
    }
    // 查看数组最后一项
    peek() {
        return this.items[this.items.length - 1]
    }
    // 判断数组是否为空
    isEmpty() {
        return this.items.length == 0
    }
    // 清空数组
    clear() {
        this.items = []
    }
    // 返回数组长度
    size() {
        return this.items.length
    }
    // 将数组转为字符串并返回
    toString() {
        return this.items.toString()
    }
}
module.exports = Stack;