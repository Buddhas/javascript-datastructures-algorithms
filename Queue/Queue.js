class Queue {
  constructor() {
    this.items = [];
  }
  // 入队
  enqueue(element) {
    this.items.push(element);
  }
  // 出队
  dequeue() {
    return this.items.shift();
  }
  // 查看队列的第一个元素
  front() {
    return this.items[0];
  }
  // 查看队列是否为空
  isEmpty() {
    return this.items.length == 0;
  }
  // 查看队列的长度
  size() {
    return this.items.length;
  }
  // 将数组转为字符串并返回
  toString() {
    return this.items.toString();
  }
}
