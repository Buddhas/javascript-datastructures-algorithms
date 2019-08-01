class Sort {
    constructor() {
        this.arr = []
    }
    // 冒泡排序
    bubble() {
        let temp = -999
        for(let i = 0; i < this.arr.length; i++) {
            for(let j = 0; j < this.arr.length - 1 - i; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    temp = this.arr[j + 1]
                    this.arr[j + 1] = this.arr[j]
                    this.arr[j] = temp
                }
            }
        }
    }
    // 冒泡排序改进
    bubbleBetter() {
        let temp = -999
        let flag = false // 交换标识
        for(let i = 0; i < this.arr.length; i++) {
            flag = false
            for(let j = 0; j < this.arr.length - 1 - i; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    temp = this.arr[j + 1]
                    this.arr[j + 1] = this.arr[j]
                    this.arr[j] = temp
                    flag = true
                }
            }
            if (!flag) break;
        }
    }
    // 插入排序
    insert() {
        for(let i = 1; i < this.arr.length; i++) {
            if (this.arr[i - 1] > this.arr[i]) {
                let j = i 
                while(this.arr[j - 1] && this.arr[j] < this.arr[j - 1]) {
                    let temp = this.arr[j]
                    this.arr[j] = this.arr[j - 1]
                    this.arr[j - 1] = temp 
                    j--
                }
            }
        } 
    }
    // 快速排序
    fast(fastArr = this.arr) {
        if (fastArr.length == 0) {
            return []
        } else {
            let left = []
            let right = []
            let temp = fastArr[0]
            for(let i =0; i < fastArr.length; i++) {
                if (fastArr[i] < temp) {
                    left.push(fastArr[i])
                } else {
                    right.push(fastArr[i])
                }
            }
            return this.fast(left).concat(temp, this.fast(right))
        }
    }
}